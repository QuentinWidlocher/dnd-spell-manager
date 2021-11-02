<template>
    <template v-if="spells?.length != undefined">
		<template v-if="isDesktop">
			<DesktopSelect :spells="spells" @search="search" @select="selectSpell"></DesktopSelect>
		</template>
		<template v-else>
			<MobileSelect :spells="spells" @search="search" @select="selectSpell"></MobileSelect>
		</template>
	</template>
</template>
<script setup lang="ts">
import MobileSelect from '../components/MobileSelect.vue'
import DesktopSelect from '../components/DesktopSelect.vue'
import { onMounted, ref } from 'vue';
import { Spell } from '../types/spell';
import { AvailableLocale, useAppI18n } from '../i18n';

let spellList: Spell[] = [];

const { locale } = useAppI18n()

const byTextContains = (text: string, contains: string) => text?.toLowerCase().includes(contains?.toLowerCase())
const byName = (spell: Spell, name: string) => byTextContains(spell.name, name);
const byLevel = (spell: Spell, level: number | null) => level ? spell.level == level : true;
const byDescription = (spell: Spell, description: string) => byTextContains(spell.description, description);
const isSelected = (spell: Spell, selected: boolean | null) => selected == undefined ? true : (spell.selected ?? false) === selected;

function search(form: { name: string, level: number | null, description: string, selected: boolean | null}) {
	console.debug('searching');
	spells.value = spellList.filter(s => 
		byName(s, form.name) 
		&& byLevel(s, form.level) 
		&& byDescription(s, form.description) 
		&& isSelected(s, form.selected)
	)
}

const spells = ref<Spell[] | undefined>(undefined)

function selectSpell(spell: Spell) {
	spell.selected = !spell.selected

	localStorage.setItem('selectedSpellIds', JSON.stringify(spells.value?.filter(s => s.selected).map(s => s.id)))
}

async function loadSpells(locale: AvailableLocale) {
	const files = import.meta.glob('../assets/*.json');
	const getFile = files[`../assets/cleric.${locale}.json`];

	spellList = (await getFile()).default
}

const isDesktop = ref(false);

onMounted(async () => {

	isDesktop.value = window.innerWidth > 768
	window.addEventListener('resize', () => {
		isDesktop.value = window.innerWidth > 768
  	});

	await loadSpells(locale.value);

	spells.value = spellList.sort((a,b) => a.level - b.level)

	let selectedSpellsIdsJSON = localStorage.getItem('selectedSpellIds');
	if (selectedSpellsIdsJSON != null) {
		let selectedSpellsId: string[] = JSON.parse(selectedSpellsIdsJSON);

		selectedSpellsId.forEach(spellId => {
			let spell = spells.value?.find(spell => spell.id == spellId)
			if (spell) {
				spell.selected = true;
			}
		});
	}
})
</script>
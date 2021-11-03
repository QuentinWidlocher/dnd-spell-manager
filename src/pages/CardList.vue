<template>
    <div class="h-full bg-paper-50">
		<template v-if="spells?.length != undefined">
			<template v-if="isDesktop">
				<DesktopSelect :spells="spells" @search="search" @select="selectSpell"></DesktopSelect>
			</template>
			<template v-else>
				<MobileSelect :spells="spells" @search="search" @select="selectSpell"></MobileSelect>
			</template>
		</template>
	</div>
</template>
<script setup lang="ts">
import MobileSelect from '../components/MobileSelect.vue'
import DesktopSelect from '../components/DesktopSelect.vue'
import { onMounted, ref } from 'vue';
import { Spell } from '../types/spell';
import { AvailableLocale, useAppI18n } from '../i18n';
import { SearchFormType } from '../types/searchForm';
import { localStorageGet } from '../helpers/localstorage';
import { School } from '../types/schools';

let spellList: Spell[] = [];

const { locale } = useAppI18n()

const byTextContains = (text: string, contains: string) => text?.toLowerCase().includes(contains?.toLowerCase())
const byKeyword = (spell: Spell, keyword: string) => byTextContains(spell.name, keyword) || byTextContains(spell.description, keyword);
const byLevel = (spell: Spell, level: number | null) => level ? spell.level == level : true;
const bySchool = (spell: Spell, school: School | null) => school ? spell.school.includes(school) : true; // FIXME : Replace with == when ritual field is added
const isSelected = (spell: Spell, selected: boolean | null) => selected == undefined ? true : (spell.selected ?? false) === selected;

function search(form: SearchFormType) {
	spells.value = spellList.filter(s => 
		byKeyword(s, form.keyword) 
		&& byLevel(s, form.level) 
		&& bySchool(s, form.school) 
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

	let selectedSpellsId: string[] = localStorageGet('selectedSpellIds') ?? []

	selectedSpellsId.forEach(spellId => {
		let spell = spells.value?.find(spell => spell.id == spellId)
		if (spell) {
			spell.selected = true;
		}
	});
})
</script>
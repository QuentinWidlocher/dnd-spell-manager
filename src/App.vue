<script setup lang="ts">
import MobileSelect from './MobileSelect.vue'
import DesktopSelect from './DesktopSelect.vue'
import './style.css'
import spellList from './assets/cleric.fr.json'
import { onMounted, ref } from 'vue';
import { Spell } from './types/spell';

const byTextContains = (text: string, contains: string) => text?.toLowerCase().includes(contains?.toLowerCase())
const byName = (spell: Spell, name: string) => byTextContains(spell.name, name);
const byLevel = (spell: Spell, level: number | null) => level ? spell.level == level : true;
const byDescription = (spell: Spell, description: string) => byTextContains(spell.description, description);
const isSelected = (spell: Spell, selected: boolean | null) => selected == undefined ? true : (spell.selected ?? false) === selected;

function search(form: { name: string, level: number | null, description: string, selected: boolean | null}) {
	spells.value = spellList.filter(s => 
		byName(s, form.name) 
		&& byLevel(s, form.level) 
		&& byDescription(s, form.description) 
		&& isSelected(s, form.selected)
	)
}

const spells = ref<Spell[]>(spellList.sort((a,b) => a.level - b.level))

function selectSpell(spell: Spell) {
	spell.selected = !spell.selected

	localStorage.setItem('selectedSpellIds', JSON.stringify(spells.value.filter(s => s.selected).map(s => s.id)))
}

const isDesktop = ref(false);

onMounted(() => {
	console.debug('spellList.length', spellList.length);

	isDesktop.value = window.innerWidth > 768
	window.addEventListener('resize', () => {
		isDesktop.value = window.innerWidth > 768
  	});

	let selectedSpellsIdsJSON = localStorage.getItem('selectedSpellIds');
	if (selectedSpellsIdsJSON != null) {
		let selectedSpellsId: string[] = JSON.parse(selectedSpellsIdsJSON);

		selectedSpellsId.forEach(spellId => {
			let spell = spells.value.find(spell => spell.id == spellId)
			if (spell) {
				spell.selected = true;
			}
		});
	}
})

</script>

<template>
	<template v-if="isDesktop">
		<DesktopSelect :spells="spells" @search="search" @select="selectSpell"></DesktopSelect>
	</template>
	<template v-else>
		<MobileSelect :spells="spells" @search="search" @select="selectSpell"></MobileSelect>
	</template>
</template>

<style>
</style>

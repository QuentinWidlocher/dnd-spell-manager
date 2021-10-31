<script setup lang="ts">
import MobileSelect from './MobileSelect.vue'
import DesktopSelect from './DesktopSelect.vue'
import './style.css'
import spellList from './assets/cleric.json'
import { computed, onMounted, ref } from 'vue';
import { Spell } from './types/spell';

const byTextContains = (text: string, contains: string) => text.toLowerCase().includes(contains.toLowerCase())
const byName = (spell: Spell, name: string) => byTextContains(spell.name, name);
const byLevel = (spell: Spell, level: number | null) => level ? spell.level == level : true;
const byDescription = (spell: Spell, description: string) => byTextContains(spell.description, description);

function search(form: { name: string, level: number | null, description: string}) {
	spells.value = spellList.filter(s => byName(s, form.name) && byLevel(s, form.level) && byDescription(s, form.description))
}

const spells = ref<Spell[]>(spellList)

function selectSpell(spell: Spell) {
	spell.selected = !spell.selected
}

const isDesktop = ref(false);

onMounted(() => {
	isDesktop.value = window.innerWidth > 768
	window.addEventListener('resize', () => {
		isDesktop.value = window.innerWidth > 768
  })
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

<script setup lang="ts">
import SpellCard from './components/SpellCard.vue'
import './style.css'
import spellList from './assets/cleric.json'
import { ref } from 'vue';
import SearchForm from './components/SearchForm.vue';
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

</script>

<template>
	<div class="p-6">
		<SearchForm @search="search" />
	</div>
	<ul class="flex flex-wrap">
		<li class="w-full md:w-1/2 lg:w-1/3 p-2" v-for="(spell, i) in spells" :key="i + spell.name">
			<SpellCard @click="selectSpell(spell)" :spell="spell" />
		</li>
	</ul>
</template>

<style>
</style>


<template>
<SearchForm @search="search" />
<div class="h-full w-full">
	<ul class="flex flex-wrap">
		<li class="p-2 w-1/3" v-for="(spell, i) in spells" :key="i + spell.name">
			<SpellCard @click="selectSpell(spell)" :spell="spell" />
		</li>
	</ul>
</div>
</template>

<script setup lang="ts">
import SpellCard from './components/SpellCard.vue'
import SearchForm from './components/SearchForm.vue';
import { Spell } from './types/spell';
import { PropType } from '@vue/runtime-core';

const { spells } = defineProps({
	spells: Array as PropType<Spell[]>
})

function search(form: { name: string, level: number | null, description: string}) {
	emit('search', form)
}

const emit = defineEmits(['select', 'search'])

function selectSpell(spell: Spell) {
	emit('select', spell)
}

</script>
<style>
</style>

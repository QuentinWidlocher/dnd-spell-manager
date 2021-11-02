
<template>
<SearchForm @search="search" />
<div class="h-full w-full">
	<ul class="flex flex-wrap">
		<li class="p-2 w-1/3" v-for="(spell, i) in spells" :key="spell.id">
			<SpellCard @click="selectSpell(spell)" :spell="spell" />
		</li>
	</ul>
</div>
</template>

<script setup lang="ts">
import SpellCard from './SpellCard.vue'
import SearchForm from './SearchForm.vue';
import { Spell } from '../types/spell';
import { SearchFormType } from '../types/searchForm';

const { spells } = defineProps<{
	spells: Spell[]
}>()

function search(form: SearchFormType) {
	emit('search', form)
}

const emit = defineEmits<{
	(e: 'select', spell: Spell): void,
	(e: 'search', form: SearchFormType): void
}>()

function selectSpell(spell: Spell) {
	emit('select', spell)
}

</script>
<style>
</style>

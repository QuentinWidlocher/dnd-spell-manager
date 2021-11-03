
<template>
	<div class="h-full w-full pt-2 pb-20 overflow-hidden">
		<swiper :spaceBetween="-40" :modules="[Virtual]" :virtual="{enabled: true, addSlidesAfter: 2, addSlidesBefore: 2}" centered-slides class="h-full w-full">
			<swiper-slide v-for="(spell, i) in spells" :key="spell.id" :virtualIndex="spell.id">
				<div class="px-5 h-full">
					<SpellCard @click="selectSpell(spell)" :spell="spell"/> 
				</div>
			</swiper-slide>
		</swiper>
	</div>
<BottomDrawer :opened="drawerOpened" @toggle="drawerOpened = !drawerOpened">
	<SearchForm @search="search" />
</BottomDrawer>
</template>

<script setup lang="ts">
import SpellCard from './SpellCard.vue'
import BottomDrawer from './BottomDrawer.vue'
import SearchForm from './SearchForm.vue';
import { Spell } from '../types/spell';
import { Swiper, SwiperSlide } from 'swiper/vue';
import 'swiper/css';
import "swiper/css/effect-cards"

import { Virtual } from 'swiper';
import { ref } from 'vue';
import { SearchFormType } from '../types/searchForm';

const { spells } = defineProps<{
	spells: Spell[]
}>()

const drawerOpened = ref(false);

function search(form: SearchFormType) {
	drawerOpened.value = false;
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

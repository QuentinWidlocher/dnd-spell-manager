
<template>
	<div class="w-full pt-2 px-5 overflow-hidden">
		<swiper :virtual="{enabled: true, addSlidesAfter: 1, addSlidesBefore: 1}" effect="cards" :cards-effect="{slideShadows: false}" class=" w-full">
			<swiper-slide v-for="(spell, i) in spells" :key="spell.id" :virtualIndex="spell.id">
				<SpellCard @click="selectSpell(spell)" :spell="spell" /> 
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

import SwiperCore, {
  EffectCards, Virtual
} from 'swiper';
import { PropType } from '@vue/runtime-core';
import { ref } from 'vue';

SwiperCore.use([EffectCards, Virtual]);

const { spells } = defineProps({
	spells: Array as PropType<Spell[]>
})

const drawerOpened = ref(false);

function search(form: { name: string, level: number | null, description: string}) {
	drawerOpened.value = false;
	emit('search', form)
}

const emit = defineEmits(['select', 'search'])

function selectSpell(spell: Spell) {
	emit('select', spell)
}

</script>
<style>
</style>

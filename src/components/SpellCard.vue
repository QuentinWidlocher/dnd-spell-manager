<template>
	<div v-if="spell" :class="[spell.selected && 'border-blue-500', 'border-4 border-transparent rounded-2xl p-px w-full h-full select-none']">
		<article class="p-1 w-full h-full border rounded-2xl shadow-md cursor-pointer">
		<div class="border p-3 rounded-xl h-full flex flex-col">
			<div class="flex items-center">
				<h1 class="mr-5 font-bold text-xl text-red-800 border-2 rounded-full border-red-800 p-3">
					{{ spell.level }}
				</h1>
				<div class="w-full">
					<h1 class="font-bold text-xl my-0 text-red-800">{{ spell.name }}</h1>
					<h2 class="text-red-900">{{ t(`schools.${spell.school}`) }}{{spell.isRitual ? ` (${t('schools.ritual')})` : ''}}</h2>
				</div>
				<div class="img-wrapper ">
					<img class="" :src="spell.picture" alt="" />
				</div>
			</div>
			<ul class="my-5 w-full lg:w-2/3">
				<li>
					<div class="flex">
						<div class="w-1/2"><strong>{{t('spellCard.castingTime')}} :</strong></div>
						<div class="w-1/2">{{ spell.castingTime }}</div>
					</div>
				</li>
				<li>
					<div class="flex">
						<div class="w-1/2"><strong>{{t('spellCard.range')}} :</strong></div>
						<div class="w-1/2">{{ spell.range }}</div>
					</div>
				</li>
				<li>
					<div class="flex">
						<div class="w-1/2"><strong>{{t('spellCard.duration')}} :</strong></div>
						<div class="w-1/2">{{ spell.duration }}</div>
					</div>
				</li>
				<li>
					<div class="flex">
						<div class="w-1/2"><strong>{{t('spellCard.components')}} :</strong></div>
						<div class="w-1/2 h-20 overflow-y-auto">{{ spell.components }}</div>
					</div>
				</li>
			</ul>
			<p class="flex-grow overflow-y-auto" v-html="spell.description"></p>
		</div>
	</article>
	</div>
</template>

<script setup lang="ts">
import { useAppI18n } from '../i18n';
import {Spell} from '../types/spell'

const { t } = useAppI18n()

const { spell } = defineProps<{
	spell: Spell
}>()

</script>

<style>
article {
	background: url("/card-bg.jpg");
}

article > div {
    border: solid 1px #b09a87;
    background-color: rgba(232, 216, 189, 0.66);
    background-blend-mode: overlay;
}

.img-wrapper {
    display: block;
	position: relative;
}

.img-wrapper:before {
	content: '';
	position: absolute;
	width:100%;
    height:100%;
	box-shadow:inset 0px 0px 2px 3px rgb(232, 216, 189);
}
</style>

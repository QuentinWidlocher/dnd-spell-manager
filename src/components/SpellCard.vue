<template>
	<div v-if="spell" :class="[spell.selected && 'border-primary-500', 'border-4 border-transparent rounded-2xl p-px w-full h-full select-none']">
		<article class="paper-texture bg-paper-500 p-1 w-full h-full border rounded-2xl shadow-md cursor-pointer">
			<div class="bg-paper-300 border-2 text-center border-paper-600 bg-opacity-70 bg-blend-overlay p-3 rounded-xl h-full flex flex-col align-middle">
				<h1 class="level">
						{{ spell.level }}
				</h1>
				<div class="w-full">
					<h1 class="font-bold text-xl my-0 text-red-800">{{ spell.name }}</h1>
					<h2 class="text-red-900">{{ t(`schools.${spell.school}`) }}{{spell.isRitual ? ` (${t('schools.ritual')})` : ''}}</h2>
				</div>
				<div class="img-wrapper ">
					<img class="" :src="spell.picture" alt="" />
				</div>
				<ul class="text-left text-paper-900 my-5 w-full lg:w-2/3">
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
				<p class="text-left text-paper-900 flex-grow overflow-y-auto" v-html="spell.description"></p>
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
	@apply bg-paper-500;
}

article:before {
	@apply -m-1 rounded-xl;
}

article > div {
	z-index: 1;
}

.level {
	@apply font-bold text-3xl text-red-800 mx-auto my-3;
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

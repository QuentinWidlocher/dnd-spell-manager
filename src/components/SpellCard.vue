<template>
	<article v-if="spell" class="p-1 w-full h-full border rounded-2xl shadow-lg">
		<div class="border p-3 rounded-xl h-full">
			<div class="flex items-center">
				<h1 class="mr-5 font-bold text-xl text-red-800 border-2 rounded-full border-red-800 p-3">
					{{ spell.level }}
				</h1>
				<div class="w-full">
					<h1 class="font-bold text-xl my-0 text-red-800">{{ spell.name }}</h1>
					<h2 class="text-red-900">{{ spell.type }}</h2>
				</div>
				<div class="img-wrapper ">
					<img class="" :src="spell.picture" alt="" />
				</div>
			</div>
			<ul class="my-5 w-full lg:w-2/3">
				<li>
					<div class="flex">
						<div class="w-1/2"><strong>Casting time :</strong></div>
						<div class="w-1/2">{{ spell.castingTime }}</div>
					</div>
				</li>
				<li>
					<div class="flex">
						<div class="w-1/2"><strong>Range :</strong></div>
						<div class="w-1/2">{{ spell.range }}</div>
					</div>
				</li>
				<li>
					<div class="flex">
						<div class="w-1/2"><strong>Components :</strong></div>
						<div class="w-1/2">{{ spell.components }}</div>
					</div>
				</li>
				<li>
					<div class="flex">
						<div class="w-1/2"><strong>Duration :</strong></div>
						<div class="w-1/2">{{ spell.duration }}</div>
					</div>
				</li>
			</ul>
			<p v-html="spell.description"></p>
		</div>
	</article>
</template>

<script lang="ts">
import {Spell} from '../types/spell'

import { defineComponent, PropType } from 'vue'

export default defineComponent({
  props: {
      spell: Object as PropType<Spell>
  }
})

</script>

<style>
article {
	background: url("https://i.pinimg.com/originals/a2/d2/d4/a2d2d404c591e0cc4c5da4d6e4585e0d.jpg");
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

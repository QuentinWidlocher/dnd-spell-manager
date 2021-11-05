<template>
	<div class="grid">
		<main>
			<router-view></router-view>
		</main>
		<footer class="h-16 z-20">
			<Navbar/>
		</footer>
	</div>
	<ReloadPrompt/>
</template>

<script setup lang="ts">
import './style.css'
import ReloadPrompt from './components/ReloadPrompt.vue';
import Navbar from './components/Navbar.vue';
</script>

<style>
.grid {
	width: 100%;
	height: 100%;

	overflow-y: hidden;

	display: grid;
	grid-template-columns: 1fr;
	grid-template-rows: 1fr auto;
}

main {
	width: 100%;
	height: 100%;
	min-height: 100%;

	overflow-y: auto;
	grid-row: 1;
}

footer {
	grid-row: 2;
}
</style>

<template>
<div :class="['drawer bg-white rounded-t-xl z-10 shadow-up-xl', opened ? 'opened' : 'closed']">
    <div class="p-3" @click="opened = !opened">
        <svg v-if="!opened" class="w-6 h-6 mx-auto" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 15l7-7 7 7"></path></svg>
        <svg v-else class="w-6 h-6 mx-auto" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 9l-7 7-7-7"></path></svg>
    </div>
    <slot></slot>
</div>
</template>

<script setup lang="ts">import { ref } from 'vue';

const opened = ref(false)

</script>

<style>
.drawer {
    position: fixed;
}

.drawer.closed {
    top: calc(100vh - 7rem)
}

.drawer.opened {
    bottom: 0
}
</style>
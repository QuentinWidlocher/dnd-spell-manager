<template>
<div :class="['drawer border-8 border-b-0 border-wood-500 bg-paper-300 text-paper-900 rounded-t-3xl z-10 shadow-up-xl', opened ? 'opened' : 'closed']">
    <div class="h-12 rounded-t-xl flex items-center cursor-pointer" @click="emit('toggle')">
        <svg v-if="!opened" class="w-6 h-6 mx-auto" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 15l7-7 7 7"></path></svg>
        <svg v-else class="w-6 h-6 mx-auto" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 9l-7 7-7-7"></path></svg>
    </div>

    <slot></slot>
</div>
</template>

<script setup lang="ts">

const { opened } = defineProps({
    opened: Boolean
})

const emit = defineEmits<{
    (e: 'toggle'): void
}>()

</script>

<style>
.drawer {
    position: fixed;
    transition: transform .5s ease;
    bottom: 0;
    border-style: ridge;

    box-shadow: inset 0px 1px 5px 1px rgba(88, 60, 51, .5);
}

.drawer.closed {
    /* We use translate3d because it uses the GPU on mobile */
    transform: translate3d(0, calc(100% - 3.5rem - 4rem), 0);
}

.drawer.opened {
    transform: translate3d(0, -4rem, 0);
}
</style>
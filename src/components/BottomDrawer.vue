<template>
<div :class="['drawer bg-white rounded-t-xl z-10 shadow-up-xl', opened ? 'opened' : 'closed']">
    <div class="h-12 flex items-center cursor-pointer" @click="emit('toggle')">
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
}

.drawer.closed {
    /* We use translate3d because it uses the GPU on mobile */
    transform: translate3d(0, calc(100% - 3rem - 4rem), 0);
}

.drawer.opened {
    transform: translate3d(0, -4rem, 0);
}
</style>
<template>
<form class="w-full" @submit.prevent="emit('search', form)">
    <div class="flex flex-wrap w-full items-end">
        <div class="form-group">
            <label for="name">Name</label>
        <input type="text" name="name" v-model="form.name">
        </div>

        <div class="form-group">
            <label for="level">Level</label>
        <input type="number" min="0" max="9" name="level" v-model="form.level">
        </div>

        <div class="form-group">
            <label for="description">Description</label>
        <input type="text" name="description" v-model="form.description">
        </div>

        <div class="ml-auto flex space-x-3 p-3 w-full sm:w-auto">
            <button type="button" @click="clear()" class=" px-3 flex-grow py-1 rounded border border-blue-500 text-blue-500 hover:bg-blue-700 hover:text-white">Clear</button>
            <button type="submit" class="flex-grow px-3 py-1 rounded bg-blue-500 text-white hover:bg-blue-700">Search</button>
        </div>
    </div>
</form>
</template>
<script setup lang="ts">
import { ref } from 'vue';

const defaultForm = {
            name: '',
            description: '',
            level: null
        }

const form = ref<{ 
            name: string,
            level: number | null,
            description: string
        }>({...defaultForm})

const emit = defineEmits(['search']);

function clear() {
    form.value = {...defaultForm}
    emit('search', form.value)
}
</script>
<style>
input {
    @apply border rounded p-1 ring-blue-500;
}

.form-group {
    @apply flex flex-col flex-wrap p-3 w-full sm:w-auto
}
</style>
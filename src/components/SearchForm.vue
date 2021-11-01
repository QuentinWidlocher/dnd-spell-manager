<template>
<form class="w-full" @submit.prevent="emit('search', form)">
    <div class="flex flex-wrap w-full items-end">
        <div class="form-group">
            <label for="name">Name</label>
            <input class="input" type="text" name="name" v-model="form.name">
        </div>

        <div class="form-group">
            <label for="level">Level</label>
            <input class="input" type="number" min="0" max="9" name="level" v-model="form.level">
        </div>

        <div class="form-group">
            <label for="description">Description</label>
            <input class="input" type="text" name="description" v-model="form.description">
        </div>

        <div class="form-group flex">
            <label class="py-2"><input type="radio" class="radio" :value="true" v-model="form.selected" /> Only selected spells</label>
            <label class="py-2"><input type="radio" class="radio" :value="false" v-model="form.selected" /> Only not selected spells</label>
            <label class="py-2"><input type="radio" class="radio" :value="null" v-model="form.selected" /> All spells</label>
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
            level: null,
            selected: undefined,
        }

const form = ref<{ 
            name: string,
            level: number | null,
            description: string,
            selected: boolean | undefined,
        }>({...defaultForm})

const emit = defineEmits(['search']);

function clear() {
    form.value = {...defaultForm}
    emit('search', form.value)
}
</script>
<style>
input.input {
    @apply border px-2 py-1 rounded border-gray-400 focus:ring-0 focus:border-blue-500;
}

input.radio[type="radio"] {
    @apply rounded-full ring-0 text-blue-500 outline-none focus-visible:ring;
}

.form-group {
    @apply flex flex-col flex-wrap p-3 w-full sm:w-auto
}
</style>
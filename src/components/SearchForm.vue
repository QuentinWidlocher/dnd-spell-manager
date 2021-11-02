<template>
<form class="w-full" @submit.prevent="search">
    <div class="flex flex-wrap w-full items-end">
        <div class="form-group">
            <label for="name">{{t('searchForm.fields.name')}}</label>
            <input class="input" type="text" name="name" v-model="form.name">
        </div>

        <div class="form-group">
            <label for="level">{{t('searchForm.fields.level')}}</label>
            <input class="input" type="number" min="0" max="9" name="level" v-model="form.level">
        </div>

        <div class="form-group">
            <label for="description">{{t('searchForm.fields.description')}}</label>
            <input class="input" type="text" name="description" v-model="form.description">
        </div>

        <div class="form-group flex">
            <label class="py-2"><input type="radio" class="radio" :value="true" v-model="form.selected" /> {{t('searchForm.fields.select.selected')}}</label>
            <label class="py-2"><input type="radio" class="radio" :value="false" v-model="form.selected" /> {{t('searchForm.fields.select.notSelected')}}</label>
            <label class="py-2"><input type="radio" class="radio" :value="null" v-model="form.selected" /> {{t('searchForm.fields.select.all')}}</label>
        </div>

        <div class="ml-auto flex space-x-3 p-3 w-full sm:w-auto">
            <button type="button" @click="clear()" class=" px-3 flex-grow py-1 rounded border border-blue-500 text-blue-500 hover:bg-blue-700 hover:text-white">{{t('searchForm.clear')}}</button>
            <button type="submit" class="flex-grow px-3 py-1 rounded bg-blue-500 text-white hover:bg-blue-700">{{t('searchForm.search')}}</button>
        </div>
    </div>
</form>
</template>
<script setup lang="ts">
import { onMounted, ref } from 'vue';
import { useI18n } from 'vue-i18n';
import { I18N } from '../i18n';

type SearchFormType = { 
            name: string,
            level: number | null,
            description: string,
            selected: boolean | undefined,
        }

const { t } = useI18n<{ message: I18N }>()

const defaultForm = {
            name: '',
            description: '',
            level: null,
            selected: undefined,
        }

const form = ref<SearchFormType>({...defaultForm})

const emit = defineEmits<{
    (e: 'search', form: SearchFormType): void
}>();

function clear() {
    form.value = {...defaultForm}
    search()
}

function search() {
    localStorage.setItem('searchForm', JSON.stringify(form.value))
    emit('search', form.value)
}

onMounted(() => {
    const searchFormJSON = localStorage.getItem('searchForm');
	if (searchFormJSON != null) {
		form.value = JSON.parse(searchFormJSON);
        emit('search', form.value)
	}
})
</script>
<style>
</style>
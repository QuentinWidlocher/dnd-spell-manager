<template>
<form class="w-full" @submit.prevent="search">
    <div class="flex flex-wrap w-full items-end">
        <div class="form-group">
            <label for="keyword">{{t('searchForm.fields.keyword')}}</label>
            <input class="input" type="text" id="keyword" name="keyword" v-model="form.keyword">
        </div>

        <div class="form-group">
            <label for="level">{{t('searchForm.fields.level')}}</label>
            <input class="input" type="number" min="0" max="9" name="level" id="level" v-model="form.level">
        </div>

        <div class="form-group">
            <label for="school">{{t('searchForm.fields.school')}}</label>
            <select name="school" id="school" v-model="form.school">
                <option v-for="school in schools" :value="school">{{t(`schools.${school}`)}}</option>
            </select>
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
import { localStorageGet } from '../helpers/localstorage';
import { useAppI18n } from '../i18n';
import { SearchFormType } from '../types/searchForm';
import { schools } from '../types/schools'

const { t } = useAppI18n()

const defaultForm = {
            keyword: '',
            school: null,
            level: null,
            selected: null,
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
    form.value = localStorageGet('searchForm') ?? defaultForm
    emit('search', form.value)
})
</script>
<style>
</style>
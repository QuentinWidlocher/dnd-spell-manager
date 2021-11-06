<template>
<form class="w-full bg-paper-300 text-paper-900" @submit.prevent="search">
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
                <option :value="null">{{t('searchForm.fields.anySchool')}}</option>
                <option v-for="school in schools" :value="school">{{t(`schools.${school}`)}}</option>
            </select>
        </div>

        <div class="form-group">
            <label for="castingClass">{{t('searchForm.fields.castingClass')}}</label>
            <select name="castingClass" id="castingClass" v-model="form.castingClass">
                <option :value="null">{{t('searchForm.fields.anyClass')}}</option>
                <option v-for="castingClass in classes" :value="castingClass">{{t(`classes.${castingClass}`)}}</option>
            </select>
        </div>

        <div class="form-group flex">
            <label class="py-2"><input type="radio" class="radio" :value="true" v-model="form.selected" /> {{t('searchForm.fields.select.selected')}}</label>
            <label class="py-2"><input type="radio" class="radio" :value="false" v-model="form.selected" /> {{t('searchForm.fields.select.notSelected')}}</label>
            <label class="py-2"><input type="radio" class="radio" :value="null" v-model="form.selected" /> {{t('searchForm.fields.select.all')}}</label>
        </div>

        <div class="ml-auto flex space-x-3 p-3 w-full sm:w-auto">
            <button type="button" @click="clear()" class="outline flex-grow">{{t('searchForm.clear')}}</button>
            <button type="submit" class="raised flex-grow">{{t('searchForm.search')}}</button>
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
import { classes } from '../types/classes'

const { t } = useAppI18n()

const defaultForm: SearchFormType = {
            keyword: '',
            school: null,
            level: null,
            selected: null,
            castingClass: null,
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
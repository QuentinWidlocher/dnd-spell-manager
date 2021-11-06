<template>
<div class="bg-paper-200 h-full">
    <div class="form-group">
        <label for="lang">{{t('settings.lang')}}</label>
        <select name="lang" id="lang" v-model="locale">
            <option value="fr">Français</option>
            <option value="en">English</option>
        </select>
    </div>
</div>
</template>
<script setup lang="ts">
import {useAppI18n } from '../i18n';

const { t, locale } = useAppI18n()
</script>
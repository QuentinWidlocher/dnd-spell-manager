<template>
<div class="form-group">
    <label for="lang">{{t('settings.lang')}}</label>
    <select name="lang" id="lang" v-model="locale">
        <option value="fr">Français</option>
        <option value="en">English</option>
    </select>
</div>
</template>
<script setup lang="ts">
import {useAppI18n } from '../i18n';

const { t, locale } = useAppI18n()
</script>
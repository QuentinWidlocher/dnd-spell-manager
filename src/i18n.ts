import { createI18n, useI18n } from 'vue-i18n'
import { en } from './i18n/en'
import { fr } from './i18n/fr'

export type AvailableLocale = 'en' | 'fr'

export type I18N = {
  searchForm: {
    search: string
    clear: string
    fields: {
      keyword: string
      level: string
      school: string
      select: {
        selected: string
        notSelected: string
        all: string
      }
    }
  }
  spellCard: {
    castingTime: string
    range: string
    duration: string
    components: string
  }
  settings: {
    lang: string
  }
  pwa: {
    offlineReady: string
    reloadPrompt: string
    reload: string
    close: string
  }
  schools: {
    abjuration: string
    conjuration: string
    divination: string
    enchantment: string
    evocation: string
    illusion: string
    necromancy: string
    transmutation: string
  }
}

const messages: { [k in AvailableLocale]: I18N } = {
  en,
  fr,
}

const i18n = createI18n<[I18N], AvailableLocale>({
  legacy: false,
  locale: 'fr',
  fallbackLocale: 'en',
  messages,
})

export function useAppI18n() {
  return useI18n<[I18N], AvailableLocale>()
}

export default i18n

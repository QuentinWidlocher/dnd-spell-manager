import { createI18n, useI18n } from 'vue-i18n'

export type AvailableLocale = 'en' | 'fr'

export type I18N = {
  searchForm: {
    search: string
    clear: string
    fields: {
      name: string
      level: string
      description: string
      select: {
        selected: string
        notSelected: string
        all: string
      }
    }
  }
  settings: {
    lang: string
  }
}

const en: I18N = {
  searchForm: {
    search: 'Search',
    clear: 'Clear',
    fields: {
      name: 'Name',
      level: 'Level',
      description: 'Description',
      select: {
        selected: 'Only selected spells',
        notSelected: 'Only not selected spells',
        all: 'All spells',
      },
    },
  },
  settings: {
    lang: 'Language',
  },
}

const fr: I18N = {
  searchForm: {
    search: 'Rechercher',
    clear: 'Effacer',
    fields: {
      name: 'Nom',
      level: 'Niveau',
      description: 'Description',
      select: {
        selected: 'Seulement les sorts sélectionnés',
        notSelected: 'Seulement les sorts non sélectionnés',
        all: 'Tous les sorts',
      },
    },
  },
  settings: {
    lang: 'Langage',
  },
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

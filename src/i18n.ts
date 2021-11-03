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
  spellCard: {
    castingTime: 'Casting time',
    range: 'Range',
    duration: 'Duration',
    components: 'Components',
  },
  settings: {
    lang: 'Language',
  },
  pwa: {
    offlineReady: 'Application ready to work offline',
    reloadPrompt: 'New content available, click on reload button to update.',
    reload: 'Reload application',
    close: 'Close',
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
  spellCard: {
    castingTime: "Temps d'incantation",
    range: 'Portée',
    duration: 'Durée',
    components: 'Composantes',
  },
  settings: {
    lang: 'Langage',
  },
  pwa: {
    offlineReady: "L'application peux désormais fonctionner hors ligne.",
    reloadPrompt:
      "Une mise à jour est disponible, redémarrer l'application pour en bénéficier.",
    reload: "Redémarrer l'application",
    close: 'Fermer',
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

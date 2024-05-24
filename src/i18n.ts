import i18n from 'i18next'
import { initReactI18next } from 'react-i18next'
import deLang from '~/localization/de.json'
import enLang from '~/localization/en.json'

const resources = {
  en: {
    translation: enLang,
  },
  de: {
    translation: deLang,
  },
}

i18n.use(initReactI18next).init({
  compatibilityJSON: 'v3',
  resources,
  lng: 'en',
  fallbackLng: 'en',
  interpolation: {
    escapeValue: false,
  },
})

export default i18n

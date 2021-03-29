import i18n from 'i18next'
import LanguageDetector from 'i18next-browser-languagedetector'
import {initReactI18next} from 'react-i18next'
import Backend from 'i18next-http-backend'
import Cache from 'i18next-localstorage-cache'

i18n.use(Backend).use(Cache).use(LanguageDetector).use(initReactI18next).init({
  // fallbackLng: "ru",
  debug: true,
  detection: {
    order: ['queryString', 'localstorage'],
    cache: ["localstorage"]
  },
  interpolation: {
    escapeValue: false
  },
  supportedLngs: ["kg", "ru"],
  // defaultNS: "default"
})

export default i18n
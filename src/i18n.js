import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';
import LanguageDetector from 'i18next-browser-languagedetector';

import translationKO from './locales/ko/translation.json';
import translationEN from './locales/en/translation.json';

const resources = {
  ko: {
    translation: translationKO
  },
  en: {
    translation: translationEN
  }
};

i18n
  .use(LanguageDetector)
  .use(initReactI18next)
  .init({
    resources,
    fallbackLng: 'ko',
    lng: 'ko',
    debug: false,
    interpolation: {
      escapeValue: false
    },
    load: 'languageOnly',
    preload: ['ko', 'en'],
    react: {
      useSuspense: false
    }
  });

export default i18n; 
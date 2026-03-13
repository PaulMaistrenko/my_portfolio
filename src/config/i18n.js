import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';
import LanguageDetector from 'i18next-browser-languagedetector';

import enTranslation from '../translations/en.json';
import deTranslation from '../translations/de.json';
import ukTranslation from '../translations/uk.json';

i18n
  .use(LanguageDetector)
  .use(initReactI18next)
  .init({
    fallbackLng: 'en',
    debug: false,
    interpolation: {
      escapeValue: false,
    },
    resources: {
      en: { translation: enTranslation },
      de: { translation: deTranslation },
      uk: { translation: ukTranslation },
    },
  });

export default i18n;

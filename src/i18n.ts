import i18n from "i18next";
import { initReactI18next } from "react-i18next";
import { LanguagesEnum } from "./core/enums/languages.enum";

import TranslationAr from "./core/locales/ar/translation.json";
import TranslationEn from "./core/locales/en/translation.json";

// the translations
// (tip move them in a JSON file and import them)
const resources = {
  ar: {
    translation: TranslationAr,
  },
  en: {
    translation: TranslationEn,
  },
};

i18n
  .use(initReactI18next) // passes i18n down to react-i18next
  .init({
    resources,
    lng: LanguagesEnum.AR,

    keySeparator: false, // we do not use keys in form messages.welcome

    interpolation: {
      escapeValue: false, // react already safes from xss
    },
  });

export default i18n;

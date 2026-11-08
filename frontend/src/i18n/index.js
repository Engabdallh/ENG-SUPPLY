
import i18n from "i18next";
import { initReactI18next } from "react-i18next";

import arTranslation from "./locales/ar/translation.json";
import enTranslation from "./locales/en/translation.json";

const savedLanguage = localStorage.getItem("eng-supply-language");

i18n.use(initReactI18next).init({
  resources: {
    ar: { translation: arTranslation },
    en: { translation: enTranslation },
  },

  lng: savedLanguage || "ar",
  fallbackLng: "en",

  interpolation: {
    escapeValue: false,
  },
});

i18n.on("languageChanged", (language) => {
  localStorage.setItem("eng-supply-language", language);
});

export default i18n;

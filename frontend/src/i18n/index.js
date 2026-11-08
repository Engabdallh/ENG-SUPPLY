
import i18n from "i18next";
import { initReactI18next } from "react-i18next";

import arTranslation from "./locales/ar/translation.json";
import enTranslation from "./locales/en/translation.json";

const savedLanguage =
  localStorage.getItem("eng-supply-language") || "ar";

i18n.use(initReactI18next).init({
  resources: {
    ar: { translation: arTranslation },
    en: { translation: enTranslation },
  },

  lng: savedLanguage,
  fallbackLng: "en",

  supportedLngs: ["ar", "en"],
  interpolation: {
    escapeValue: false,
  },

  react: {
    useSuspense: false,
  },
});

i18n.on("languageChanged", (language) => {
  localStorage.setItem("eng-supply-language", language);

  document.documentElement.lang = language;
  document.documentElement.dir = language === "ar" ? "rtl" : "ltr";
});

document.documentElement.lang = savedLanguage;
document.documentElement.dir =
  savedLanguage === "ar" ? "rtl" : "ltr";

export default i18n;

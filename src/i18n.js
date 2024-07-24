import i18n from "i18next";
import { initReactI18next } from "react-i18next";

const resources = {
  en: {
    translation: {
      home: "Home",
      works: "Works",
      blog: "Blog",
      contact: "Contact me",
      // Add other translations here
    },
  },
  fr: {
    translation: {
      home: "Accueil",
      works: "Travaux",
      blog: "Blog",
      contact: "Contactez-moi",
      // Add other translations here
    },
  },
};

i18n.use(initReactI18next).init({
  resources,
  lng: "en", // default language
  keySeparator: false,
  interpolation: {
    escapeValue: false,
  },
});

export default i18n;

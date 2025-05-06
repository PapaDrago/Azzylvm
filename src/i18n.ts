import i18n from "i18next";
import { initReactI18next } from "react-i18next";
import LanguageDetector from "i18next-browser-languagedetector";

// Importa tus JSON de traducción
import en from "./locales/en.json";
import es from "./locales/es.json";

i18n
  .use(LanguageDetector) // Detecta el idioma del navegador
  .use(initReactI18next) // Conecta con React
  .init({
    resources: {
      en: { translation: en },
      es: { translation: es },
    },
    fallbackLng: "es", // Idioma por defecto si no coincide
    interpolation: {
      escapeValue: false, // React ya escapa por defecto
    },
  });

export default i18n;

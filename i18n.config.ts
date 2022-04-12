import * as Localization from "expo-localization";
import i18n from "i18next";
import AsyncStoragePlugin from "i18next-react-native-async-storage";
import { initReactI18next } from "react-i18next";

import { en, ptBR } from "./translations";

const resources = {
  "en-US": {
    translation: en,
  },
  "pt-BR": {
    translation: ptBR,
  },
};

i18n
  .use(initReactI18next)
  .use(AsyncStoragePlugin(Localization.locale))
  .init({
    compatibilityJSON: "v3",
    resources,
    // language to use if translations in user language are not available
    fallbackLng: "en",
    interpolation: {
      escapeValue: false, // not needed for react!!
    },
  });

export default i18n;

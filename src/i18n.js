import { createContext, useContext } from "react";

export const I18nCtx = createContext({
  t: undefined,
  languages: [],
  currentLang: "en",
  setCurrentLang: () => {},
});

export const useI18n = () => useContext(I18nCtx);

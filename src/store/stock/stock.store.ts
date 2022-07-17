import { createSlice } from "@reduxjs/toolkit"
import { defaultLang, translations } from "../../i18n"
import { LangAction, Translations } from "../types";

const i18nSliece = createSlice({
  name: 'i18n',
  initialState: {
    lang: defaultLang,
    translations,
  },
  reducers: {
    selectTranslations(state, { payload }) {
      localStorage.setItem("lang", payload);
      state.lang = payload
    },
    
  }
});

export const { selectTranslations } = i18nSliece.actions
export default i18nSliece.reducer
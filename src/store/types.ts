export interface SelectTranslations {
  payload: string;
  lang: string;
  translations: Translations;
  type: string;
}
export interface Translations {
  pt: Translation;
  en: Translation;
  es: Translation;
}

export interface Translation {
  navbar: navbar;
  about: string;
}

export interface navbar {
  whatWeDo: string;
  solutions: string;
  howWeAct: string;
  whoWeAre: string;
  news: string;
  suport: string;
  contact: string;
  languages: string;
  portuguese: string;
  english: string;
  spain: string;
  subTitle: navbarSubTitle;
}

export interface navbarSubTitle {
  whatWeDo: string;
  solutions: string;
  howWeAct: string;
  whoWeAre: string;
  news: string;
  suport: string;
  contact: string;
  languages: string;
  portuguese: string;
  english: string;
  spain: string;
  darkmode: string;
  menu: string;
  close: string;
}



// export type LangAction = selectTranslations;

// export const SET_LANGUAGE = 'SET_LANGUAGE';

// export interface LangState {
//   lang: string;
// }

// interface SetLanguageAction {
//   type: typeof SET_LANGUAGE;
//   payload: string;
// }

export type LangAction = SelectTranslations;
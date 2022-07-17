// import pt from './pt';
// import en from './en';
// import es from './es';

// export const translate = (key: string, language: string): string => {
//   let langData: { [key: string]: string } = {};

//   if(language === 'PT') {
//     langData = pt;
//   }else if(language === 'ES') {
//     langData = es;
//   }else if(language === 'EN') {
//     langData = en;
//   }

//   return langData[key];
// }




// import pt from './pt';
// import en from './en';
// import es from './es';

// const navigatorLang = () => {
//   let save = ''
//   if (localStorage.getItem("lang")){
//      return localStorage.getItem("lang")!
//   }
//   if (navigator.language === 'pt-BR') {
//     save = 'pt'
//     return 'pt'
//   }
//   if (navigator.language === 'en-US') {
//     save = 'en'
//     return 'en'
//   }
//   if (navigator.language === 'es-ES') {
//     save = 'es'
//     return 'es'
//   }
//   if (save !== 'pt' || 'es') {
//     return 'en'
//   }
//   return save
// }

// export const defaultLang = navigatorLang();
// export const translations = {
//   pt,
//   en,
//   es
// }

import pt from './pt';
import en from './en';
import es from './es';

const navigatorLang = ():string => {
  let save = ''
  if (localStorage.getItem("lang")){
     return localStorage.getItem("lang")!
  }
  else if (navigator.language === 'pt-BR') {
    save = 'pt'
    return 'pt'
  }
  else if (navigator.language === 'en-US') {
    save = 'en'
    return 'en'
  }
  else if (navigator.language === 'es-ES') {
    save = 'es'
    return 'es'
  }
  else {
    return 'en'
  }
  
}


export const defaultLang = navigatorLang();
export const translations = {
  pt,
  en,
  es
};
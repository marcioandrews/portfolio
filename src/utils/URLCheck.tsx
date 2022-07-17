import { BaseURL } from "."

function URLCheck(lang:string, url: string ) {
    let save = {  lang: '', isURL: false }
    if (window.location.href === BaseURL + '/en' + url) {
      save.lang = 'en'
      console.log('en')
    }
    if (window.location.href === BaseURL + '/pt' + url) {
      save.lang = 'pt'
      console.log('pt')
    }
    if (window.location.href === BaseURL + '/es' + url) {
      save.lang = 'es'
      console.log('es')
    }
    if (window.location.href !== BaseURL + '/' + lang + url) {
      save.isURL = true
    }

    return save
}

export default URLCheck;
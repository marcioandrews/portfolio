import { BaseURL } from "."

function URLCheckHome(lang:string, url: string ) {
    let save = {  lang: '', isURL: false }
    if (window.location.href.slice(0, BaseURL.length + 3) === BaseURL + '/en' + url) {
      save.lang = 'en'
      console.log('en')
    }
    if (window.location.href.slice(0, BaseURL.length + 3) === BaseURL + '/pt' + url) {
      save.lang = 'pt'
      console.log('pt')
    }
    if (window.location.href.slice(0, BaseURL.length + 3) === BaseURL + '/es' + url) {
      save.lang = 'es'
      console.log('es')
    }
    if (window.location.href.slice(0, BaseURL.length + 3) !== BaseURL + '/' + lang + url) {
      save.isURL = true
    }

    return save
}

export default URLCheckHome;
import { useState } from 'react';
import { RiMenu3Line, RiCloseLine, RiArrowRightSLine } from 'react-icons/ri';
import logoB from '../../assets/logoSimovaB.svg'
import logoW from '../../assets/logoSimovaW.svg'
import PT from '../../assets/PT.svg'
import EN from '../../assets/EN.svg'
import ES from '../../assets/ES.svg'
import DarkMode from '../darkMode/DarkModeButton';
import './navbar.scss';
import { selectTranslations } from '../../store/stock/stock.store'
import { useDispatch, useSelector } from 'react-redux'
import { BaseURL } from '../../utils';
import { LangAction, Translations, SelectTranslations } from '../../store/types';
import { RootState } from '../../store';

function Navbar() {
    const dispatch = useDispatch();
    const t = useSelector((state:any) => state.i18n.translations[state.i18n.lang]);
    const lang = useSelector((state:RootState) => state.i18n.lang);
    const [darkmode, setDarkmode] = useState(false);
    const [toggleMenu, setToggleMenu] = useState(false);
    const [toggleLanguage, setToggleLanguage] = useState(false);
    const [navbar, setNavbar] = useState(false);
    const darkmodeON = (value: boolean) => {
        setDarkmode(value)
    }

    const changeLang = (lang: string) => {
        dispatch(selectTranslations(lang))
        let saveURL = window.location.href.slice(BaseURL.length + 3, window.location.href.length)
        window.location.replace(BaseURL + "/" + lang + saveURL);
    }
    const dropdownMenu = () => {
        setToggleMenu(!toggleMenu)
        setToggleLanguage(false)
    }
    const dropdownLanguage = () => {
        setToggleLanguage(!toggleLanguage)
        setToggleMenu(false)
    }
    const languageTitle = () => {
        if (lang === "en") {
            return t.navbar.subTitle.english
        }
        if (lang === "es") {
            return t.navbar.subTitle.spain
        }
        if (lang === "pt") {
            return t.navbar.subTitle.portuguese
        }
    }
    const languageActive = () => {
        if (lang === "en") {
            return EN
        }
        if (lang === "es") {
            return ES
        }
        if (lang === "pt") {
            return PT
        }
    }
    const changeBackground = () => {
        if (window.scrollY >= 50) {
            setNavbar(true)
        } else {
            setNavbar(false)
        }
    }
    window.addEventListener('scroll', changeBackground)
    return (
        <div className={navbar ? "simova__navbar active" : "simova__navbar"}>
            <div className="simova__navbar-links">
                <a href={BaseURL + "/" + lang + "/#"}>
                    <div className="simova__navbar-links_logo">
                        {darkmode ?
                            <img title='Simova' alt="Simova" src={logoW} /> :
                            <img title='Simova' alt="Simova" src={logoB} />}
                    </div>
                </a>
                <div className="simova__navbar-links_container">
                    <p title={t.navbar.subTitle.whatWeDo} ><a href={BaseURL + "/" + lang + "/#o-que-fazemos"}>{t.navbar.whatWeDo}</a></p>
                    <p title={t.navbar.subTitle.solutions} ><a href={BaseURL + "/" + lang + "/#solucoes"}>{t.navbar.solutions}</a></p>
                    <p title={t.navbar.subTitle.howWeAct} ><a href={BaseURL + "/" + lang + "/#como-atuamos"}>{t.navbar.howWeAct}</a></p>
                    <p title={t.navbar.subTitle.whoWeAre} ><a href={BaseURL + "/" + lang + "/#quem-somos"}>{t.navbar.whoWeAre}</a></p>
                    <p title={t.navbar.subTitle.news} ><a href="https://www.simova.com.br/blog">{t.navbar.news}</a></p>
                </div>
            </div>
            <div className="simova__navbar-support">
                <div className="simova__navbar-support-sup">
                    <a href={BaseURL + "/" + lang + "/suport"}><p title={t.navbar.subTitle.suport} >{t.navbar.suport}</p></a>
                </div>
                <a href={BaseURL + "/" + lang + "/contact"}><button title={t.navbar.subTitle.contact} type="button">{t.navbar.contact}</button></a>
                <img title={languageTitle()} alt="PT_BR" src={languageActive()} />
                <RiArrowRightSLine title='Idiomas' id={toggleLanguage ? 'arrow-rotate' : 'arrow'} onClick={dropdownLanguage} />
                {toggleLanguage && (
                    <div className={navbar ? "simova__navbar-language_container active scale-up-center" : "simova__navbar-language_container scale-up-center"}>
                        <p className="simova__navbar-language_container-language" title={t.navbar.subTitle.languages} >{t.navbar.languages}</p>
                        <div onClick={() => changeLang("pt")} className={languageActive() === PT ? "simova__navbar-language_container-links-active" : "simova__navbar-language_container-links"}>
                            <img alt="PT" src={PT} title={t.navbar.subTitle.portuguese} /><p title={t.navbar.subTitle.portuguese} >{t.navbar.portuguese}</p>
                        </div>
                        <div onClick={() => changeLang("en")} className={languageActive() === EN ? "simova__navbar-language_container-links-active" : "simova__navbar-language_container-links"}>
                            <img alt="EN" src={EN} title={t.navbar.subTitle.english} /><p title={t.navbar.subTitle.english} >{t.navbar.english}</p>
                        </div>
                        <div onClick={() => changeLang("es")} className={languageActive() === ES ? "simova__navbar-language_container-links-active" : "simova__navbar-language_container-links"}>
                            <img alt="ES" src={ES} title={t.navbar.subTitle.spain} /><p title={t.navbar.subTitle.spain} >{t.navbar.spain}</p>
                        </div>
                    </div>
                )}
                <DarkMode darkmodeON={darkmodeON} />
            </div>
            <div className="simova__navbar-menu">
                {toggleMenu
                    ? <RiCloseLine title={t.navbar.subTitle.close} id="close" size={27} onClick={dropdownMenu} />
                    : <RiMenu3Line title={t.navbar.subTitle.menu} id="menu" size={27} onClick={dropdownMenu} />}
                {toggleMenu && (
                    <div className={navbar ? "simova__navbar-menu_container active scale-up-center" : "simova__navbar-menu_container scale-up-center"}>
                        <div className="simova__navbar-menu_container-links">
                            <p title={t.navbar.subTitle.whatWeDo} ><a href={BaseURL + "/" + lang + "/#o-que-fazemos"}>{t.navbar.whatWeDo}</a></p>
                            <p title={t.navbar.subTitle.solutions} ><a href={BaseURL + "/" + lang + "/#solucoes"}>{t.navbar.solutions}</a></p>
                            <p title={t.navbar.subTitle.howWeAct} ><a href={BaseURL + "/" + lang + "/#como-atuamos"}>{t.navbar.howWeAct}</a></p>
                            <p title={t.navbar.subTitle.whoWeAre} ><a href={BaseURL + "/" + lang + "/#quem-somos"}>{t.navbar.whoWeAre}</a></p>
                            <p title={t.navbar.subTitle.news} ><a href="https://www.simova.com.br/blog">{t.navbar.news}</a></p>
                        </div>
                        <div className="simova__navbar-menu_container-links-support">
                            <a href={BaseURL + "/" + lang + "/suport"}><p title={t.navbar.subTitle.suport} >{t.navbar.suport}</p></a>
                            <a href={BaseURL + "/" + lang + "/contact"}><button title={t.navbar.subTitle.contact} type="button">{t.navbar.contact}</button></a>
                            <DarkMode darkmodeON={darkmodeON} />
                        </div>
                    </div>
                )}
            </div>
        </div>
    )
}

export default Navbar;
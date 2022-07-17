import './portfolio.scss';
import Adeco from '../../assets/adeco.png';
import AgroAmazoina from '../../assets/agro-amazoina.png';
import AndradeGutierrez from '../../assets/andrade-gutierrez.png';
import Atvos from '../../assets/atvos.png';
import CCBM from '../../assets/ccbm.png';
import Fibria from '../../assets/fibria.png';
import Galvao from '../../assets/galvao.png';
import JoFeGe from '../../assets/jofege.png';
import Liebherr from '../../assets/liebherr.png';
import OAS from '../../assets/oas.png';
import Odebrecht from '../../assets/odebrecht.png';
import QueirozGalvao from '../../assets/queiroz-galvao.png';
import Renuka from '../../assets/renuka.png';
import Suzano from '../../assets/suzano.png';
import Techint from '../../assets/techint.png';
import Usina from '../../assets/usina.png';
import UsinasItamarati from '../../assets/usinas-itamarati.png';
import Zagope from '../../assets/zagope.png';
import { useEffect, useRef } from 'react';
import { RiArrowLeftSLine, RiArrowRightSLine } from 'react-icons/ri';
import { useSelector } from 'react-redux';

function Portfolio() {
    const t = useSelector((state: any) => state.i18n.translations[state.i18n.lang]);
    const carousel = useRef(document.createElement("div"))
    const handleRightClick = (e: any) => {
        e.preventDefault();
        carousel.current.scrollLeft += carousel.current.offsetWidth / 8;
    };
    const handleLeftClick = (e: any) => {
        e.preventDefault();
        carousel.current.scrollLeft -= carousel.current.offsetWidth / 8;
    };

    useEffect(() => {
        const handleAnimation = () => {
            if (carousel.current.scrollLeft === carousel.current.offsetWidth || carousel.current.scrollLeft > carousel.current.offsetWidth) {
                carousel.current.scrollLeft = 0
                return;
            }
            // console.log(carousel.current.scrollLeft)
            carousel.current.scrollLeft += carousel.current.offsetWidth / 8;
        }
        const interval = setInterval(handleAnimation, 1500)
        return () => clearInterval(interval)
    })

    return (
        <div className='portfolio' id='portfolio'  >
            <div className='portfolio-content__body' >
                <div className='portfolio-content__body__title'>
                    <p>{t.portfolio.mainTitle}</p>
                </div>
                <div className='portfolio-content__body__arrows' >
                    <button onClick={handleLeftClick} >
                        <RiArrowLeftSLine title={t.portfolio.subTitle.arrowLeft} size={60} />
                    </button>
                    <div className='portfolio-content__body__imgages' ref={carousel}>
                        <img title='Adeco' alt="logo-brx" src={Adeco} />
                        <img title='Agro Amazoina' alt="logo-SAP" src={AgroAmazoina} />
                        <img title='Andrade Gutierrez' alt="logo-oracle" src={AndradeGutierrez} />
                        <img title='Atvos' alt="logo-TOTVS" src={Atvos} />
                        <img title='CCBM' alt="logo-linx" src={CCBM} />
                        <img title='Fibria' alt="logo-brx" src={Fibria} />
                        <img title='Galvao' alt="logo-SAP" src={Galvao} />
                        <img title='Jo Fe Ge' alt="logo-oracle" src={JoFeGe} />
                        <img title='Liebherr' alt="logo-TOTVS" src={Liebherr} />
                        <img title='OAS' alt="logo-linx" src={OAS} />
                        <img title='Odebrecht' alt="logo-brx" src={Odebrecht} />
                        <img title='Queiroz Galvao' alt="logo-SAP" src={QueirozGalvao} />
                        <img title='Renuka' alt="logo-oracle" src={Renuka} />
                        <img title='Suzano' alt="logo-TOTVS" src={Suzano} />
                        <img title='Techint' alt="logo-linx" src={Techint} />
                        <img title='Usina' alt="logo-brx" src={Usina} />
                        <img title='Usinas Itamarati' alt="logo-SAP" src={UsinasItamarati} />
                        <img title='Zagope' alt="logo-oracle" src={Zagope} />
                    </div>
                    <button onClick={handleRightClick} >
                        <RiArrowRightSLine title={t.portfolio.subTitle.arrowRight} size={60} />
                    </button>
                </div>
            </div>
        </div>
    )
}

export default Portfolio;
import './solutions.scss';
import { BsBuilding } from 'react-icons/bs';
import { MdOutlineAgriculture, MdOutlineBorderColor } from 'react-icons/md';
import { RiPencilRuler2Line } from 'react-icons/ri';
import Background from '../../assets/simova_background.jpg';
import Logobrx from '../../assets/logo-brx.png';
import Logolinx from '../../assets/logo-linx.png';
import Logooracle from '../../assets/logo-oracle.png';
import LogoSAP from '../../assets/logo-SAP.png';
import LogoTOTVS from '../../assets/logo-TOTVS.png';
import { useSelector } from 'react-redux';

function Solutions() {
    const t = useSelector((state: any) => state.i18n.translations[state.i18n.lang]);
    return (
        <div className='solutions' style={{backgroundImage: `url(${Background})`}} id='solucoes'>
            <div className='solutions-content__title'>
                <h1>{t.solutions.mainTitle}</h1>
            </div>
            <div className='solutions-content__links scale-up-center'>
                <div className='solutions-content__links__agribusiness'>
                    <div className='solutions-content__links__icon'>
                        <MdOutlineAgriculture />
                    </div>
                    <div className='solutions-content__links__button'>
                        <a href={"/agribusiness"}><button title={t.solutions.subTitle.buttonAgribusiness} type="button">{t.solutions.buttonAgribusiness}</button></a>
                    </div>
                </div>

                <div className='solutions-content__links__construction'>
                    <div className='solutions-content__links__icon'>
                        <BsBuilding />
                    </div>                    
                    <div className='solutions-content__links__button'>
                        <a href={"/construction"}><button title={t.solutions.subTitle.buttonConstruction} type="button">{t.solutions.buttonConstruction}</button></a>
                    </div>
                </div>

                <div className='solutions-content__links__order-of-service'>
                    <div className='solutions-content__links__icon'>
                        <MdOutlineBorderColor />
                    </div>                   
                    <div className='solutions-content__links__button'>
                        <a href={"/orderOfService"}><button title={t.solutions.subTitle.buttonOrderOfService} type="button">{t.solutions.buttonOrderOfService}</button></a>
                    </div>
                </div>

                <div className='solutions-content__links__custom'>
                    <div className='solutions-content__links__icon'>
                        <RiPencilRuler2Line />
                    </div>                    
                    <div className='solutions-content__links__button'>
                        <button title={t.solutions.subTitle.buttonCustom} type="button">{t.solutions.buttonCustom}</button>
                    </div>
                </div>
            </div>
            <div className='solutions-content__branding'>
                <p>{t.solutions.mainSubTitle}</p>
                <div className='solutions-content__branding__image scale-up-center'>
                    <img title='BRX' alt="logo-brx" src={Logobrx} />
                    <img title='SAP' alt="logo-SAP" src={LogoSAP} />
                    <img title='Oracle' alt="logo-oracle" src={Logooracle} />
                    <img title='TOTVS' alt="logo-TOTVS" src={LogoTOTVS} />
                    <img title='Linx' alt="logo-linx" src={Logolinx} />
                </div>
            </div>
        </div>
        
    )

}

export default Solutions;
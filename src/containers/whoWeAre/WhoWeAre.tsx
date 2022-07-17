import './whoWeAre.scss';
import plataformas from '../../assets/plataformas.png'
import { useSelector } from 'react-redux';

function WhoWeAre() {
    const t = useSelector((state: any) => state.i18n.translations[state.i18n.lang]);
    return (
        <div className='WhoWeAre' id="quem-somos">
            <div className='WhoWeAre-content__image'>
                <img alt="Simova-plataformas" src={plataformas} />
            </div>
            <div className='WhoWeAre-content__plataform'>
                <div className='WhoWeAre-content__plataform__separator' />
                <div>
                    <div className='WhoWeAre-content__plataform__title'>
                        <h2>{t.whoWeAre.mainTitle}</h2>
                    </div>
                    <div className='WhoWeAre-content__plataform__text'>
                        <p><b>{t.whoWeAre.mainSubTitle}</b><br /><br />{t.whoWeAre.subMainSubTitle}</p>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default WhoWeAre;
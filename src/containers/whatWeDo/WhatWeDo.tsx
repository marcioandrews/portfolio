import { useEffect, useState } from 'react';
import './whatWeDo.scss';
import Simova_apps from '../../assets/simova_apps.png';
import { RiWhatsappLine } from 'react-icons/ri';
import Background1 from '../../assets/simova_background_1.jpg';
import Background2 from '../../assets/simova_background_2.jpg';
import Background3 from '../../assets/simova_background_3.jpg';
import Background4 from '../../assets/simova_background_4.jpg';
import { useSelector } from 'react-redux';

function WhatWeDo() {
    const t = useSelector((state: any) => state.i18n.translations[state.i18n.lang]);
    const Background = [
        Background1,
        Background2,
        Background3,
        Background4,
    ]
    const [frame, setFrame] = useState(0)
    
    useEffect(() => {
        const handleAnimation = () => {
            setFrame(frame => (frame + 1) % Background.length)
        }
        const interval = setInterval(handleAnimation, 5000)
        return () => clearInterval(interval)
    }, )

    return (
        <div className='whatwedo' id="o-que-fazemos">
            <div className='whatwedo-content__header' style={{backgroundImage: `url(${Background[frame]})`}}>
                <div className='whatwedo-content__header__text'>
                    <h1>{t.whatWeDo.mainTitle}</h1>
                    <p>{t.whatWeDo.mainSubTitle}</p>
                    <div className='whatwedo-content__header__button'>
                        <div className='whatwedo-content__header__button__icon'>
                            <RiWhatsappLine />
                        </div>
                        <button title={t.whatWeDo.subTitle.button} type="button">{t.whatWeDo.button}</button>
                    </div>
                </div>
                <div className="whatwedo-content__header__image">
                    <img alt="simova-apps" src={Simova_apps} />
                </div>
            </div>
            <div className="whatwedo-content__spotlight scale-up-center">
                <div className="whatwedo-content__spotlight__text">
                    <h1>{t.whatWeDo.subMainTitle}</h1>
                    <p>{t.whatWeDo.subMainSubTitle}</p>
                </div>
            </div>
        </div>
    )
}

export default WhatWeDo;
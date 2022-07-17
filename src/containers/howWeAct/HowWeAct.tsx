import { RiPencilRuler2Line, RiWifiLine, RiMapPinLine, RiSmartphoneLine, RiHotspotLine, RiSlideshowLine, RiRefreshLine, RiTimeLine } from 'react-icons/ri';
import { useSelector } from 'react-redux';
import './howWeAct.scss';

function HowWeAct() {
    const t = useSelector((state: any) => state.i18n.translations[state.i18n.lang]);
    return (
        <div className='howWeAct' id="como-atuamos">
            <div className='howWeAct-content__header'>
                <div className='howWeAct-content__header__title'>
                    <h2>{t.howWeAct.mainTitle}</h2>
                </div>
                <div className='howWeAct-content__header__links'>
                    <p title={t.howWeAct.subTitle.link1}>{t.howWeAct.link1}</p>
                    <p title={t.howWeAct.subTitle.link2}>{t.howWeAct.link2}</p>
                    <p title={t.howWeAct.subTitle.link3}>{t.howWeAct.link3}</p>
                    <p title={t.howWeAct.subTitle.link4}>{t.howWeAct.link4}</p>
                    <p title={t.howWeAct.subTitle.link5}>{t.howWeAct.link5}</p>
                    <p title={t.howWeAct.subTitle.link6}>{t.howWeAct.link6}</p>
                    <p title={t.howWeAct.subTitle.link7}>{t.howWeAct.link7}</p>
                </div>
            </div>
            <div className='howWeAct-content__spotlight scale-up-center'>
                <div className='howWeAct-content__spotlight__box'>
                    <div className='howWeAct-content__spotlight__box__icon' >                        
                        <RiWifiLine />
                    </div>
                    <div className='howWeAct-content__spotlight__box__title'>
                        <p>{t.howWeAct.item1}</p>
                    </div>
                    <div className='howWeAct-content__spotlight__box__text'>
                        <p>{t.howWeAct.subItem1}</p>
                    </div>
                </div>
                <div className='howWeAct-content__spotlight__box'>
                    <div className='howWeAct-content__spotlight__box__icon' >                        
                        <RiMapPinLine />
                    </div>
                    <div className='howWeAct-content__spotlight__box__title'>
                        <p>{t.howWeAct.item2}</p>
                    </div>
                    <div className='howWeAct-content__spotlight__box__text'>
                        <p>{t.howWeAct.subItem2}</p>
                    </div>
                </div>
                <div className='howWeAct-content__spotlight__box'>
                    <div className='howWeAct-content__spotlight__box__icon' >                        
                        <RiSmartphoneLine />
                    </div>
                    <div className='howWeAct-content__spotlight__box__title'>
                        <p>{t.howWeAct.item3}</p>
                    </div>
                    <div className='howWeAct-content__spotlight__box__text'>
                        <p>{t.howWeAct.subItem3}</p>
                    </div>
                </div>
                <div className='howWeAct-content__spotlight__box'>
                    <div className='howWeAct-content__spotlight__box__icon' >                        
                        <RiHotspotLine />
                    </div>
                    <div className='howWeAct-content__spotlight__box__title'>
                        <p>{t.howWeAct.item4}</p>
                    </div>
                    <div className='howWeAct-content__spotlight__box__text'>
                        <p>{t.howWeAct.subItem4}</p>
                    </div>
                </div>
                <div className='howWeAct-content__spotlight__box'>
                    <div className='howWeAct-content__spotlight__box__icon' >                        
                        <RiSlideshowLine />
                    </div>
                    <div className='howWeAct-content__spotlight__box__title'>
                        <p>{t.howWeAct.item5}</p>
                    </div>
                    <div className='howWeAct-content__spotlight__box__text'>
                        <p>{t.howWeAct.subItem5}</p>
                    </div>
                </div>
                <div className='howWeAct-content__spotlight__box'>
                    <div className='howWeAct-content__spotlight__box__icon' >                        
                        <RiRefreshLine />
                    </div>
                    <div className='howWeAct-content__spotlight__box__title'>
                        <p>{t.howWeAct.item6}</p>
                    </div>
                    <div className='howWeAct-content__spotlight__box__text'>
                        <p>{t.howWeAct.subItem6}</p>
                    </div>
                </div>
                <div className='howWeAct-content__spotlight__box'>
                    <div className='howWeAct-content__spotlight__box__icon' >                        
                        <RiPencilRuler2Line />
                    </div>
                    <div className='howWeAct-content__spotlight__box__title'>
                        <p>{t.howWeAct.item7}</p>
                    </div>
                    <div className='howWeAct-content__spotlight__box__text'>
                        <p>{t.howWeAct.subItem7}</p>
                    </div>
                </div>
                <div className='howWeAct-content__spotlight__box'>
                    <div className='howWeAct-content__spotlight__box__icon' >                        
                        <RiTimeLine />
                    </div>
                    <div className='howWeAct-content__spotlight__box__title'>
                        <p>{t.howWeAct.item8}</p>
                    </div>
                    <div className='howWeAct-content__spotlight__box__text'>
                        <p>{t.howWeAct.subItem8}</p>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default HowWeAct;
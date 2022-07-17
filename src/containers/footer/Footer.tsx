import './footer.scss';
import logoW from '../../assets/logoSimovaW.svg'
import { RiFacebookCircleFill, RiInstagramFill, RiLinkedinBoxFill, RiYoutubeFill } from 'react-icons/ri';
import { useSelector } from 'react-redux';

function Footer() {
    const t = useSelector((state: any) => state.i18n.translations[state.i18n.lang]);
    return (
        <div className='footer' id="rodape">
            <div className='footer-content__simova'>
                <div className='footer-content__simova__address'>
                    <img title='Simova' alt="Simova" src={logoW} />
                    <p>{t.footer.address}</p>
                </div>

                <div className='footer-content__simova__links'>
                    <div className='footer-content__simova__links__bold'>
                        <p>{t.footer.column1}</p>
                    </div>
                    <div className='footer-content__simova__links__normal'>
                        <p title={t.footer.subTitle.c1link1} >{t.footer.c1link1}</p>
                        <p title={t.footer.subTitle.c1link2} >{t.footer.c1link2}</p>
                        <p title={t.footer.subTitle.c1link3} >{t.footer.c1link3}</p>
                        <p title={t.footer.subTitle.c1link4} >{t.footer.c1link4}</p>
                    </div>
                </div>

                <div className='footer-content__simova__company'>
                    <div className='footer-content__simova__company__bold'>
                        <p>{t.footer.column2}</p>
                    </div>
                    <div className='footer-content__simova__company__normal'>
                        <p title={t.footer.subTitle.c2link1} >{t.footer.c2link1}</p>
                        <p title={t.footer.subTitle.c2link2} >{t.footer.c2link2}</p>
                        <p title={t.footer.subTitle.c2link3} >{t.footer.c2link3}</p>
                    </div>
                </div>

                <div className='footer-content__simova__contact'>
                    <div className='footer-content__simova__contact__bold'>
                        <p>{t.footer.column3}</p>
                    </div>
                    <div className='footer-content__simova__contact__normal'>
                        <p title={t.footer.subTitle.c3link1} >{t.footer.c3link1}</p>
                        <p title={t.footer.subTitle.c3link2} >{t.footer.c3link2}</p>
                        <p title={t.footer.subTitle.c3link3} >{t.footer.c3link3}</p>
                    </div>
                </div>

                <div className='footer-content__simova__social-media'>
                    <p>{t.footer.column4}</p>
                    <RiFacebookCircleFill title='Facebook' id="Facebook" size={27} />
                    <RiInstagramFill title='Instagram' id="Instagram" size={27} />
                    <RiYoutubeFill title='Youtube' id="Youtube" size={27} />
                    <RiLinkedinBoxFill title='Linkedin' id="Linkedin" size={27} />
                </div>
            </div>
            <div className='footer-content__copyright'>
                <p>{t.footer.copyright}</p>
            </div>
        </div>

    )

}

export default Footer;
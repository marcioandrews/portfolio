import { RiMailSendLine, RiWhatsappLine, RiAtLine, RiCustomerService2Line } from 'react-icons/ri';
import './contact.scss';
import Footer from '../footer/Footer';
import { useSelector } from 'react-redux';

function Contact() {
    const t = useSelector((state:any) => state.i18n.translations[state.i18n.lang]);
    return (
        <div className='contact' id='contact' >
            <div className='contact-content__header' >
                <h1>{t.contact.mainTitle}</h1>
                <div className='contact-content__header__elements scale-up-center' >
                    <div title={t.contact.subTitle.bWhatsapp} className='contact-content__header__elements__box' >
                        <div className='contact-content__header__elements__box__icon' >
                            <RiWhatsappLine />
                        </div>
                        <p>{t.contact.bWhatsapp}</p>
                    </div>
                    <div title={t.contact.subTitle.bEmail} className='contact-content__header__elements__box' >
                        <div className='contact-content__header__elements__box__icon' >
                            <RiAtLine />
                        </div>
                        <p>{t.contact.bEmail}</p>
                    </div>
                    <div className='contact-content__header__elements__box' id='phone' >
                        <div className='contact-content__header__elements__box__icon' >
                            <RiCustomerService2Line />
                        </div>
                        <p title={t.contact.subTitle.bPhone1} >{t.contact.bPhone1}</p>
                        <p title={t.contact.subTitle.bPhone2} >{t.contact.bPhone2}</p>
                    </div>
                </div>
            </div>
            <div className='contact-content__body scale-up-center'>
                <div className='contact-content__body__title'>
                    <h2>{t.contact.subMainTitle}</h2>
                </div>
                <form>
                    <label>
                        {t.contact.question1}<p>{t.contact.required}</p>
                    </label>
                    <input type="text" name="name" placeholder={t.contact.description1} required />
                    <label>
                        {t.contact.question2}<p>*</p>
                    </label>
                    <input type="text" name="company" placeholder={t.contact.description2} required />
                    <label>
                        {t.contact.question3}<p>*</p>
                    </label>
                    <input type="tel" name="tel" placeholder={t.contact.description3} required maxLength={11} />
                    <label>
                        {t.contact.question4}<p>*</p>
                    </label>
                    <input type="email" name="email" placeholder={t.contact.description4} required />
                    <label>
                        {t.contact.question5}<p>*</p>
                    </label>
                    <textarea name="text" rows={5} placeholder={t.contact.description5} required />
                    <div className='contact-content__body__button' >
                        <div className='contact-content__body__button__icon' >
                            <RiMailSendLine />
                        </div>
                        <button title={t.contact.subTitle.bSend} type="submit">{t.contact.bSend}</button>
                    </div>
                </form>
            </div>
            <Footer />
        </div>

    )

}

export default Contact;
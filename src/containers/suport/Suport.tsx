import { useState } from 'react';
import { RiArrowRightSLine, RiSearchLine, RiCustomerService2Line } from 'react-icons/ri';
import './suport.scss';
import Footer from '../footer/Footer';
import { useDispatch, useSelector } from 'react-redux'
import { URLCheck } from '../../utils';
import { selectTranslations } from '../../store/stock/stock.store';


function Suport() {
    const t = useSelector((state: any) => state.i18n.translations[state.i18n.lang]);
    const lang = useSelector((state: any) => state.i18n.lang);
    const dispatch = useDispatch();

    function URL() {
        let save = URLCheck(lang, "/suport")
        if (save.isURL) {
            dispatch(selectTranslations(save.lang))
            localStorage.setItem("lang", save.lang);
        }
    };
    URL();
    const [questionShow, setQuestionShow] = useState([false, false, false, false, false, false, false, false, false, false, false, false]);

    const toggleQuestion = (index: number) => {
        const save = [false, false, false, false, false, false, false, false, false, false, false, false]
        save[index] = !questionShow[index]
        setQuestionShow(save)
    }

    return (
        <div className='questions' id='questions' >
            <div className='questions-content__header' >
                <h1>{t.suport.mainTitle}</h1>
                <div className='questions-content__header__elements scale-up-center' >
                    <div title={t.suport.subTitle.bQuestions} className='contact-content__header__elements__box' >
                        <a href="http://sd.simova.com.br" rel="noreferrer" target="_blank" ><div className='contact-content__header__elements__box__icon' >
                            <RiSearchLine />
                        </div></a>
                        <p>{t.suport.bQuestions}</p>
                    </div>
                    <div className='questions-content__header__elements__box' id='phone' >
                        <div className='questions-content__header__elements__box__icon' >
                            <RiCustomerService2Line />
                        </div>
                        <p title={t.suport.subTitle.bPhone1} >{t.suport.bPhone1}</p>
                        <p title={t.suport.subTitle.bPhone1} >{t.suport.bPhone2}</p>
                    </div>
                </div>
            </div>
            <div className='questions-content__body scale-up-center' >
                <div className='questions-content__body__title' >
                    <h2>{t.suport.subMainTitle}</h2>
                </div>
                <div onClick={() => toggleQuestion(0)} className='questions-content__body__txt' >
                    <p>{t.suport.question1}</p><RiArrowRightSLine id={questionShow[0] ? 'rotate' : ''} />
                </div>
                {questionShow[0] ? <p>{t.suport.answer1}</p> : null}
                <div className='questions-content__body__separator' />

                <div onClick={() => toggleQuestion(1)} className='questions-content__body__txt' >
                    <p>{t.suport.question2}</p><RiArrowRightSLine id={questionShow[1] ? 'rotate' : ''} />
                </div>
                {questionShow[1] ? <p>{t.suport.answer2}</p> : null}
                <div className='questions-content__body__separator' />

                <div onClick={() => toggleQuestion(2)} className='questions-content__body__txt' >
                    <p>{t.suport.question3}</p><RiArrowRightSLine id={questionShow[2] ? 'rotate' : ''} />
                </div>
                {questionShow[2] ? <p>{t.suport.answer3}</p> : null}
                <div className='questions-content__body__separator' />

                <div onClick={() => toggleQuestion(3)} className='questions-content__body__txt' >
                    <p>{t.suport.question4}</p><RiArrowRightSLine id={questionShow[3] ? 'rotate' : ''} />
                </div>
                {questionShow[3] ? <p>{t.suport.answer4}</p> : null}
                <div className='questions-content__body__separator' />

                <div onClick={() => toggleQuestion(4)} className='questions-content__body__txt' >
                    <p>{t.suport.question5}</p><RiArrowRightSLine id={questionShow[4] ? 'rotate' : ''} />
                </div>
                {questionShow[4] ? <p>{t.suport.answer5}</p> : null}
                <div className='questions-content__body__separator' />

                <div onClick={() => toggleQuestion(5)} className='questions-content__body__txt' >
                    <p>{t.suport.question6}</p><RiArrowRightSLine id={questionShow[5] ? 'rotate' : ''} />
                </div>
                {questionShow[5] ? <p>{t.suport.answer6}</p> : null}
                <div className='questions-content__body__separator' />

                <div onClick={() => toggleQuestion(6)} className='questions-content__body__txt' >
                    <p>{t.suport.question7}</p><RiArrowRightSLine id={questionShow[6] ? 'rotate' : ''} />
                </div>
                {questionShow[6] ? <p>{t.suport.answer7}</p> : null}
                <div className='questions-content__body__separator' />

                <div onClick={() => toggleQuestion(7)} className='questions-content__body__txt' >
                    <p>{t.suport.question8}</p><RiArrowRightSLine id={questionShow[7] ? 'rotate' : ''} />
                </div>
                {questionShow[7] ? <p>{t.suport.answer8}</p> : null}
                <div className='questions-content__body__separator' />

                <div onClick={() => toggleQuestion(8)} className='questions-content__body__txt' >
                    <p>{t.suport.question9}</p><RiArrowRightSLine id={questionShow[8] ? 'rotate' : ''} />
                </div>
                {questionShow[8] ? <p>{t.suport.answer9}</p> : null}
                <div className='questions-content__body__separator' />

                <div onClick={() => toggleQuestion(9)} className='questions-content__body__txt' >
                    <p>{t.suport.question10}</p><RiArrowRightSLine id={questionShow[9] ? 'rotate' : ''} />
                </div>
                {questionShow[9] ? <p>{t.suport.answer10}</p> : null}
                <div className='questions-content__body__separator' />

                <div onClick={() => toggleQuestion(10)} className='questions-content__body__txt' >
                    <p>{t.suport.question11}</p><RiArrowRightSLine id={questionShow[10] ? 'rotate' : ''} />
                </div>
                {questionShow[10] ? <p>{t.suport.answer11}</p> : null}
                <div className='questions-content__body__separator' />

                <div onClick={() => toggleQuestion(11)} className='questions-content__body__txt' >
                    <p>{t.suport.question12}</p><RiArrowRightSLine id={questionShow[11] ? 'rotate' : ''} />
                </div>
                {questionShow[11] ? <p>{t.suport.answer12}</p> : null}
            </div>
            <Footer />
        </div>

    )

}

export default Suport;

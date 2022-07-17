import { RiWifiLine, RiRoadMapLine, RiPagesLine, RiPinDistanceLine, RiBusWifiLine, RiStarLine } from 'react-icons/ri';
import './construction.scss';
import Footer from '../footer/Footer';
import BackgroundConstruction from '../../assets/simova_background_construction.jpg';
import Construmobil from '../../assets/construmobil.png';
import LogoSimovaElement from '../../assets/logoSimovaElement.svg';

function Construction() {
    return (
        <div className='construction' id='construction' >
            <div className='construction-content__header' style={{backgroundImage: `url(${BackgroundConstruction})`}}>
                <img alt="Simova" src={LogoSimovaElement} />
                <h1>Gestão e monitoramento de obras, equipamentos e pessoas, através da mobilidade.</h1>
                <p>Ideal para acompanhamento do progresso de obra, parte diária, telemetria e apontamento de atividades ou terceiros, com emissões de ordens de serviço e muito mais.</p>
            </div>
            <div className='construction-content__body scale-up-center' >
                <div className='construction-content__body__txt' >
                    <h1>Levando o futuro às construções</h1>
                    <p>Desde 2007 atuando no mercado de construção civil, adquirimos conhecimentos e expertise em projetos dos mais variados cenários, apoiando seus parceiros a melhorar a gestão e aumentar os ganhos das obras atuando na apropriação e gestão das equipes e equipamentos em campo.
                        A apropriação em campo, tem relação direta com a eficiência da obra, uma vez que podemos validar se o realizado está seguindo o previsto pela equipe de planejamento e também permite que sejam tomadas as ações no tempo necessário para resolver impedimentos que surgem no dia a dia das obras.
                        Saber porque uma equipe ou equipamento estão parados e analisar quais as principais perdas em campo, permitem que a equipe de planejamento e controle possam atuar na frente de trabalho a tempo de corrigir as situações que aparecem no dia a dia e que nem sempre são visíveis sem uma apuração rápida e concisa das informações coletadas em campo.</p>
                </div>
            </div>
            <div className='construction-content__title' >
                <h1>Beneficios de utilizar nossos serviços!</h1>
            </div>
            <div className='construction-content__spotLight scale-up-center' >
                <div className='construction-content__spotlight__box'>
                    <div className='construction-content__spotlight__box__icon' >                        
                        <RiBusWifiLine />
                    </div>
                    <div className='construction-content__spotlight__box__title'>
                        <p>Maquinas e Equipamentos Apontados</p>
                    </div>
                    <div className='construction-content__spotlight__box__text'>
                        <p>+ de 10000</p>
                    </div>
                </div>
                <div className='construction-content__spotlight__box'>
                    <div className='construction-content__spotlight__box__icon' >                        
                        <RiPinDistanceLine />
                    </div>
                    <div className='construction-content__spotlight__box__title'>
                        <p>Usuários Apontando</p>
                    </div>
                    <div className='construction-content__spotlight__box__text'>
                        <p>+ de 2000</p>
                    </div>
                </div>
                <div className='construction-content__spotlight__box'>
                    <div className='construction-content__spotlight__box__icon' >                        
                        <RiRoadMapLine />
                    </div>
                    <div className='construction-content__spotlight__box__title'>
                        <p>Países que o Construmóbil teve Presença</p>
                    </div>
                    <div className='construction-content__spotlight__box__text'>
                        <p>10</p>
                    </div>
                </div>
                <div className='construction-content__spotlight__box'>
                    <div className='construction-content__spotlight__box__icon' >                        
                        <RiPagesLine />
                    </div>
                    <div className='construction-content__spotlight__box__title'>
                        <p>Partes Diárias e Boletins Emitidos</p>
                    </div>
                    <div className='construction-content__spotlight__box__text'>
                        <p>+ de 100mil</p>
                    </div>
                </div>
                <div className='construction-content__spotlight__box'>
                    <div className='construction-content__spotlight__box__icon' >                        
                        <RiWifiLine />
                    </div>
                    <div className='construction-content__spotlight__box__title'>
                        <p>Tipos de Cobertura</p>
                    </div>
                    <div className='construction-content__spotlight__box__text'>
                        <p>HSPDA, 3G, 4G e Offline</p>
                    </div>
                </div>
                <div className='construction-content__spotlight__box'>
                    <div className='construction-content__spotlight__box__icon' >                        
                        <RiStarLine />
                    </div>
                    <div className='construction-content__spotlight__box__title'>
                        <p>Experiência</p>
                    </div>
                    <div className='construction-content__spotlight__box__text'>
                        <p>17 anos</p>
                    </div>
                </div>
            </div>
            <div className='construction-content__image-txt' >
                <div className='construction-content__image-txt__image' >
                    <img alt="Construmobil" src={Construmobil} />
                </div>
                <div className='construction-content__image-txt__plataform' >
                    <div className='construction-content__image-txt__plataform__separator' />
                    <div>
                        <div className='construction-content__image-txt__plataform__title' >
                            <h2>Avanço físico e progresso da obra</h2>
                        </div>
                        <div className='construction-content__image-txt__plataform__text' >
                            <p>Ao entender de forma global, ter visibilidade constante de cada responsável e as respectivas ações, o gestor consegue informações precisas, fidedignas, rápidas e pontuais, tendo assim uma gestão de avanço e progresso da obra e controle de recursos.</p>
                        </div>
                        <div className='construction-content__image-txt__plataform__title' >
                            <h2>Parte diária</h2>
                        </div>
                        <div className='construction-content__image-txt__plataform__text' >
                            <p>O uso do papel num ambiente como construções e atividades onde clima e mobilidade são frequentemente inimigos da perfeição, não acompanha uma evolução constante de concorrência e mercado. Além de não ser prático ter pessoal dedicada a interpretações de manuscritos, informações que podem não condizer com a verdade, formulários rasurados e/ou preenchidos no famoso "quando pode", sem uma precisão e constância. A mobilidade veio apra revolucionar estas coletas, e lhe fornecer aquilo que precisa: informação e integração.</p>
                        </div>
                    </div>
                </div>
            </div>
            <Footer />
        </div>
    )

}

export default Construction;
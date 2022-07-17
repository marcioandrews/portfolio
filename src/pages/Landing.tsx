import { Footer, WhatWeDo, Solutions, HowWeAct, WhoWeAre, Portfolio } from '../containers';
import '../styles/_global.scss';
import { useDispatch, useSelector } from 'react-redux';
import { URLCheckHome } from '../utils';
import { selectTranslations } from '../store/stock/stock.store';

function Landing() {
    const dispatch = useDispatch();
    const lang = useSelector((state: any) => state.i18n.lang);

    function URL(){
      let save = URLCheckHome(lang,"")
      if (save.isURL) {
        dispatch(selectTranslations(save.lang))
        localStorage.setItem("lang", save.lang);
      }
    };
    URL();

    return (

      <div className='global'>
        <WhatWeDo />
        <Portfolio />
        <Solutions />
        <HowWeAct />
        <WhoWeAre />
        <Footer />
      </div>
    )
  }

export default Landing;
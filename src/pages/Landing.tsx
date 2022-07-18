import { Footer, WhatWeDo, Solutions, HowWeAct, WhoWeAre, Portfolio } from '../containers';
import '../styles/_global.scss';

function Landing() {
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
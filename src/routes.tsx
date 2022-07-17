import { BrowserRouter, Switch, Route, Redirect } from 'react-router-dom';
import Navbar from './components/navbar/Navbar';
import Landing from './pages/Landing';
import Contact from './pages/Contact';
import Suport from './pages/Suport';
import Construction from './pages/Construction';
import Agribusiness from './pages/Agribusiness';
import OrderOfService from './pages/OrderOfService';
import NotFound from './pages/NotFound';
import { useSelector } from 'react-redux';

function Routes() {
    const lang = useSelector((state: any) => state.i18n.lang);

    return (
        <BrowserRouter >
            <Navbar/>
            <Switch >
                <Redirect exact from="/" to={lang} key="from-root" />
                <Route path={"/"} exact component={Landing} />
                <Route path={"/:lang(en|pt|es)?"} exact component={Landing} />
                <Route path={"/:lang(en|pt|es)?/contact"}  component={Contact} />
                <Route path={"/:lang(en|pt|es)?/suport"}  component={Suport} />
                <Route path={"/:lang(en|pt|es)?/construction"} component={Construction} />
                <Route path={"/:lang(en|pt|es)?/agribusiness"} component={Agribusiness} />
                <Route path={"/:lang(en|pt|es)?/orderOfService"} component={OrderOfService} />
                <Route path="*" component={NotFound} />
            </Switch>
        </BrowserRouter>
    );
}

export default Routes;
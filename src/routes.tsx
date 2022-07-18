import { BrowserRouter, Switch, Route } from 'react-router-dom';
import Navbar from './components/navbar/Navbar';
import Landing from './pages/Landing';
import Contact from './pages/Contact';
import Suport from './pages/Suport';
import Construction from './pages/Construction';
import Agribusiness from './pages/Agribusiness';
import OrderOfService from './pages/OrderOfService';
import NotFound from './pages/NotFound';

function Routes() {

    return (
        <BrowserRouter >
            <Navbar/>
            <Switch >
                <Route path={"/"} exact component={Landing} />
                <Route path={"/portfolio/"} exact component={Landing} />
                <Route path={"/portfolio/contact"}  component={Contact} />s
                <Route path={"/portfolio/suport"}  component={Suport} />
                <Route path={"/portfolio/construction"} component={Construction} />
                <Route path={"/portfolio/agribusiness"} component={Agribusiness} />
                <Route path={"/portfolio/orderOfService"} component={OrderOfService} />
                <Route path="*" component={NotFound} />
            </Switch>
        </BrowserRouter>
    );
}

export default Routes;
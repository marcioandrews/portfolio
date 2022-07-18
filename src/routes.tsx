import { BrowserRouter, Switch, Route, Redirect } from 'react-router-dom';
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
                <Route path={"/contact"}  component={Contact} />
                <Route path={"/suport"}  component={Suport} />
                <Route path={"/construction"} component={Construction} />
                <Route path={"/agribusiness"} component={Agribusiness} />
                <Route path={"/orderOfService"} component={OrderOfService} />
                <Route path="*" component={NotFound} />
            </Switch>
        </BrowserRouter>
    );
}

export default Routes;
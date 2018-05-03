import React from 'react';

import {Provider} from "react-redux";
import store from "./store";

//import react-router dependencies
import {BrowserRouter, Switch, Route} from 'react-router-dom';

// import components
import App from "./components/App";
import Temp1 from './components/Temp1';
import Temp2 from './components/Temp2';

//create browser history
import createHistory from 'history/createBrowserHistory';

const history = createHistory();

const router = (
    <Provider store={store}>
        <BrowserRouter history={history}>
            <Switch>
                <Route exact path="/" component={App}/>
                <Route exact path="/temp1" component={Temp1}/>
                <Route exact path="/temp2" component={Temp2}/>
            </Switch>
        </BrowserRouter>
    </Provider>
);
export default router;

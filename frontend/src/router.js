import React from 'react';

import {Provider} from "react-redux";
import store from "./store";

import {BrowserRouter} from 'react-router-dom';

import App from "./components/App";

import createHistory from 'history/createBrowserHistory';

const history = createHistory();

const router = (
    <Provider store={store}>
        <BrowserRouter history={history}>
            <App/>
        </BrowserRouter>
    </Provider>
);
export default router;

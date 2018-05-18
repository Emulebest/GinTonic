// @flow

import React from "react";
import type {Node} from 'react';
import Header from "./Header";
import Login from "../containers/Login";
import Logout from "./auth/Logout";
import Register from "../containers/Register";
import Lending from "./Lending";
import {Switch, Route} from 'react-router-dom';

const Body = (): Node => (
    <React.Fragment>
        <Switch>
            <Route exact path="/" component={Lending}/>
            <Route path="/login" component={Login}/>
            <Route path="/register" component={Register}/>
            <Route path="/logout" component={Logout}/>
        </Switch>
    </React.Fragment>
);

const App = (): Node => (
    <React.Fragment>
        <Header/>
        <Body/>
    </React.Fragment>
);

export default App;
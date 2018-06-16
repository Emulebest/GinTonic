// @flow

import React from "react";
import type {Node} from 'react';
import Header from "./Header";
import Login from "../containers/Login";
import Logout from "./auth/Logout";
import Register from "../containers/Register";
import DeviceContainer from "../containers/DeviceContainer";
import Lending from "./Lending";
import {Switch, Route} from 'react-router-dom';
import {NotificationContainer} from 'react-notifications';



const Body = (): Node => (
    <React.Fragment>
        <Switch>
            <Route exact path="/" component={Lending}/>
            <Route path="/login" component={Login}/>
            <Route path="/register" component={Register}/>
            <Route path="/logout" component={Logout}/>
            <Route path="/account" component={DeviceContainer}/>
        </Switch>
    </React.Fragment>
);

const App = (): Node => (
    <React.Fragment>
        <NotificationContainer/>
        <Header/>
        <Body />
    </React.Fragment>
);

export default App;
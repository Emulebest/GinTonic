import React from "react";
import Header from "./Header";
import Login from "../containers/Login";
import Register from "./auth/Register";
import Lending from "./Lending";
import {Switch, Route} from 'react-router-dom';

const Main = () => (
    <React.Fragment>
        <Switch>
            <Route exact path="/" component={Lending}/>
            <Route path="/login" component={Login}/>
            <Route path="/register" component={Register}/>
        </Switch>
    </React.Fragment>
);

const App = () => (
    <React.Fragment>
        <Header/>
        <Main/>
    </React.Fragment>
);

export default App;
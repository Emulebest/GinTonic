import React, {Component} from 'react';
import { Redirect } from 'react-router-dom';

import LoginForm from "./forms/LoginForm";
import {login} from "../../actions/auth/login"

class Login extends Component {
    constructor(props) {
        super(props);
        this.handleLogin = this.handleLogin.bind(this);
    }

    handleLogin = (values) => {
        this.props.dispatch(login(values));
    };

    render() {
        const { error, token } = this.props;
        if (token) {
            return <Redirect to="/" />;
        }
        return (
            <React.Fragment>
                <LoginForm onSubmit={this.handleLogin}/>
            </React.Fragment>
        );
    }
}

export default Login;

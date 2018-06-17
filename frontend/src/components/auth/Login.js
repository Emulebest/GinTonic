// @flow
import React, {Component} from 'react';
import type {Node} from 'react';
import {Redirect} from 'react-router-dom';

import LoginForm from "./LoginForm";
import {login} from "../../actions/auth/login";

import type {LoginCredentials} from "../../types/auth/login";
import type {Dispatch} from "../../types/general";
import {NotificationManager} from "react-notifications";
import {LOGIN_ERROR} from "../../constants/errors";

type LoginProps = {
    message: ?string,
    token: ?string,
    dispatch: Dispatch
}


class Login extends Component<LoginProps> {

    componentDidUpdate() {
        this.showError();
    }

    showError = (): ?Node => {
        let {status, message} = this.props;
        if (status >= 300) {
            NotificationManager.error(message, LOGIN_ERROR.title, 5000)
        }
    };

    handleLogin = ({email, password}: LoginCredentials) => {
        this.props.dispatch(login(email, password));
    };

    render = (): Node => {
        const {token}: { token: ?string } = this.props;
        if (token) {
            return <Redirect to="/account"/>;
        }
        return (
            <div className="form-container">
                <div className="auth-form">
                    <LoginForm onSubmit={this.handleLogin}/>
                </div>
            </div>
        );
    }
}

export default Login;

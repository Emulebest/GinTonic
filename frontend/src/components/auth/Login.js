// @flow
import React, {Component} from 'react';
import type {Node} from 'react';
import {Redirect} from 'react-router-dom';

import LoginForm from "./forms/LoginForm";
import {login} from "../../actions/auth/login";

import type {LoginType} from "../../types/auth";
import type {Action} from "../../types/general";

type LoginProps = {
    message: ?string,
    token: ?string,
    dispatch: ((payload: LoginType) => Action) => Action
}


class Login extends Component<LoginProps> {

    showError = (): ?Node => {
        return (this.props.message) ? (
            <React.Fragment>
                <p>{this.props.message}</p>
            </React.Fragment>
        ) : null;
    };

    handleLogin = ({email, password}: LoginType) => {
        this.props.dispatch(login({email, password}));
    };

    render = (): Node => {
        const {token}: { token: ?string } = this.props;
        if (token) {
            return <Redirect to="/"/>;
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

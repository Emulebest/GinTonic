// @flow

import React, {Component} from 'react';
import type {Node} from 'react';

import RegisterFrom from "./RegisterForm";
import {register} from "../../actions/auth/register";
import type {Dispatch} from "../../types/general";
import type {RegisterCredentials} from "../../types/auth/register";
import {REGISTER_ERROR} from "../../constants/errors";

import {NotificationManager} from 'react-notifications';

type RegisterProps = {
    dispatch: Dispatch,
    message: ?string,
}

class Register extends Component<RegisterProps> {

    componentDidUpdate() {
        this.showError();
    }

    showError = (): ?Node => {
        let {status, message} = this.props;
        if (status >= 300) {
            NotificationManager.error(message, REGISTER_ERROR.title, 5000)
        }
    };

    handleRegister = ({email, password, confirmPassword, userName}: RegisterCredentials) => {
        if (password !== confirmPassword) {
            NotificationManager.error('Passwords are not the same', REGISTER_ERROR.title, 5000);
            return;
        }
        this.props.dispatch(register(email, password, confirmPassword, userName, this.props.history));
    };

    render = (): Node => {

        return (
            <div className="form-container">
                <div className="auth-form">
                    <RegisterFrom onSubmit={this.handleRegister}/>
                </div>
            </div>
        )
    }
}


export default Register;
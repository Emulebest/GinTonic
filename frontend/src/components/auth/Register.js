// @flow

import React, {Component} from 'react';
import type {Node} from 'react';

import RegisterFrom from "./forms/RegisterForm";
import {register} from "../../actions/auth/register";
import type {Dispatch} from "../../types/general";
import type {RegisterCredentials} from "../../types/auth/register";

type RegisterProps = {
    dispatch: Dispatch,
    message: ?string,
}

class Register extends Component<RegisterProps> {

    showError = (): ?Node => {
        let {message} = this.props;
        return (message) ? (
            <React.Fragment>
                <p>{message}</p>
            </React.Fragment>
        ) : null;
    };

    handleRegister = ({email, password, confirmPassword, userName}: RegisterCredentials) => {
        this.props.dispatch(register(email, password, confirmPassword, userName));
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
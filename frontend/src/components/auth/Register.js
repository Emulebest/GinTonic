import React, {Component} from 'react';

import RegisterFrom from "./forms/RegisterForm";
import {register} from "../../actions/auth/register";


class Register extends Component {

    showError = () => {
        return (this.props.message) ? (
            <React.Fragment>
                <p>{this.props.message}</p>
            </React.Fragment>
        ) : null;
    };

    handleRegister = (values) => {
        this.props.dispatch(register(values));
    };

    render = () => {
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
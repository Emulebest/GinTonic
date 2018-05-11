import React, {Component} from 'react';
import {Redirect} from 'react-router-dom';

import LoginForm from "./forms/LoginForm";
import {login} from "../../actions/auth/login"


class Login extends Component {

    showError = () => {
        return (this.props.message) ? (
            <React.Fragment>
                <p>{this.props.message}</p>
            </React.Fragment>
        ) : null;
    };

    handleLogin = ({email, password}) => {
        this.props.dispatch(login({email, password}));
    };

    render = () => {
        const {token} = this.props;
        if (token) {
            return <Redirect to="/"/>;
        }
        return (
            <React.Fragment>
                {this.showError()}
                <LoginForm onSubmit={this.handleLogin}/>
            </React.Fragment>
        );
    }
}

export default Login;

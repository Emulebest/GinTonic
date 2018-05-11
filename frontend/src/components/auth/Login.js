import React, {Component} from 'react';
import {Redirect} from 'react-router-dom';

import LoginForm from "./forms/LoginForm";
import {login} from "../../actions/auth/login";

import {
    Jumbotron,
    Row,
    Col
} from 'reactstrap';


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
                <Jumbotron>
                    <Row>
                        <Col md="2"></Col>
                        <Col md="8">
                            {this.showError()}
                            <LoginForm onSubmit={this.handleLogin}/>
                        </Col>
                        <Col md="2"></Col>
                    </Row>
                </Jumbotron>


            </React.Fragment>
        );
    }
}

export default Login;

import React, {Component} from 'react';
import RegisterFrom from "./forms/RegisterForm";

import {register} from "../../actions/auth/register"

class Register extends Component {

    constructor(props) {
        super(props);
        this.handleRegister = this.handleRegister.bind(this);
    }

    handleRegister = (values) => {
        this.props.dispatch(register(values));
    };

    render() {
        return (
            <React.Fragment>
                <RegisterFrom onSubmit={this.handleRegister}/>
            </React.Fragment>
        )
    }
}


export default Register;
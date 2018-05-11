import React from 'react'
import {Field, reduxForm} from 'redux-form';
import {Icon} from "react-fa";
import {Input, Form, FormGroup, Button, InputGroup, InputGroupAddon, InputGroupText} from "reactstrap";

import "../../../style/Register.css";
import {Link} from "react-router-dom";

let RegisterForm = (props) => {
    const {handleSubmit} = props;
    return (
        <React.Fragment>
            <Form onSubmit={handleSubmit}>

                <h2>Sign Up</h2>
                <p>Please fill in this form to create an account!</p>
                <hr/>

                <InputGroup>
                    <InputGroupAddon addonType="prepend">
                        <InputGroupText><Icon name="user"/></InputGroupText>
                    </InputGroupAddon>
                    <Input tag={Field} type="text" component="input" name="username" placeholder="Username"/>
                </InputGroup>

                <InputGroup>
                    <InputGroupAddon addonType="prepend">
                        <InputGroupText><Icon name="paper-plane"/></InputGroupText>
                    </InputGroupAddon>
                    <Input tag={Field} type="email" component="input" name="email" placeholder="Email Address"/>
                </InputGroup>

                <InputGroup>
                    <InputGroupAddon addonType="prepend">
                        <InputGroupText><Icon name="lock"/></InputGroupText>
                    </InputGroupAddon>
                    <Input tag={Field} type="password" component="input" name="password" placeholder="Password"/>
                </InputGroup>

                <InputGroup>
                    <InputGroupAddon addonType="prepend">
                        <InputGroupText><Icon name="unlock"/></InputGroupText>
                    </InputGroupAddon>
                    <Input tag={Field} type="password" component="input" name="confirmPassword"
                           placeholder="Confirm Password"/>
                </InputGroup>

                <FormGroup>
                    <div className="text-center">Already have an account? <Link to='/login'>Login here</Link></div>
                </FormGroup>

                <FormGroup check row>
                    <Button>Sign Up</Button>
                </FormGroup>

            </Form>

        </React.Fragment>
    )
};

RegisterForm = reduxForm({
    form: 'register'
})(RegisterForm);

export default RegisterForm;
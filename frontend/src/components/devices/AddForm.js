// @flow

import React from 'react';
import {Field, reduxForm} from 'redux-form';

import {Icon} from "react-fa";
import {Input, Form, FormGroup, Button, InputGroup, InputGroupAddon, InputGroupText} from "reactstrap";


import "../../style/Auth.css";

let AddForm = (props) => {
    const {handleSubmit} = props;
    return (
        <React.Fragment>
            <Form onSubmit={handleSubmit}>

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

                <FormGroup check row>
                    <Button>Sign In</Button>
                </FormGroup>

            </Form>
        </React.Fragment>
    )
};

AddForm = reduxForm({
    form: 'addDevice'
})(AddForm);

export default AddForm;
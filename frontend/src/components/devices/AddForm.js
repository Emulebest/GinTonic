// @flow

import React from 'react';
import {Field, reduxForm} from 'redux-form';

import {Input, Form, FormGroup, Label, Col, Button} from "reactstrap";
import {places} from "../../utils/places";

import "../../style/AddForm.css";

let AddForm = (props) => {
    const {handleSubmit, pristine, reset, submitting} = props;
    return (
        <React.Fragment>
            <Form onSubmit={handleSubmit}>

                <FormGroup row>
                    <Label for="nameInput" md={3}>
                        <b>Device name</b>
                    </Label>
                    <Col md={9}>
                        <Input tag={Field}
                               id="nameInput"
                               name="name"
                               component="input"
                               type="text"/>
                    </Col>
                </FormGroup>

                <FormGroup row>
                    <Label for="httpInput" md={3}>
                        <b>HTTP</b>
                    </Label>
                    <Col md={9}>
                        <Input tag={Field}
                               placeholder="Enter HTTP address of device"
                               id="httpInput"
                               name="http"
                               component="input"
                               type="text"/>
                    </Col>
                </FormGroup>
                <FormGroup row>
                    <Label for="placeInput" md={3}>
                        <b>Place</b>
                    </Label>
                    <Col md={9}>
                        <Input tag={Field}
                               id="placeInput"
                               name="place"
                               component="select"
                               type="select">
                            {places.map(place => {
                                return (
                                    <option>{place}</option>
                                )
                            })}
                        </Input>
                    </Col>
                </FormGroup>


                <FormGroup row>
                    <Label for="descriptionInput" md={3}>
                        <b>Description</b>
                    </Label>
                    <Col md={9}>
                        <Input tag={Field}
                               placeholder="Enter some extra information"
                               id="descriptionInput"
                               name="description"
                               component="textarea"
                               type="textarea"/>
                    </Col>
                </FormGroup>

                <FormGroup row>
                    <Col className="btn-add-container" md="12">
                        <Button
                            className="btn-add-device-submit"
                            color="success"
                            type="submit"
                            disabled={pristine || submitting}>CREATE</Button>
                    </Col>
                </FormGroup>

            </Form>
        </React.Fragment>
    )
};

AddForm = reduxForm({
    form: 'addDevice'
})(AddForm);

export default AddForm;
// @flow

import React, {Component} from "react";
import {Button, Modal, ModalHeader, ModalBody, ModalFooter} from 'reactstrap';
import SwitchButton from 'lyef-switch-button';
import CustomSlider from "./Slider";

import type {Node} from 'react';
import type {Device} from "../../types/devices/devices";

import "../../style/toggleButton.css"


type ControlProps = {
    isOpen: boolean,
    toggle: (t: any) => any
};

type ControlState = {};

class ControlModal extends Component<ControlProps & Device, ControlState> {

    callbackFunction(){
    }

    render() : Node {
        let {isOpen, toggle, status, brightness} = this.props;
        return (
            <Modal isOpen={isOpen} toggle={toggle}>
                <ModalHeader toggle={toggle}>Control panel</ModalHeader>
                <ModalBody>
                    This is constol panel
                    <SwitchButton
                        id="my-button"
                        labelLeft="OFF"
                        labelRight="ON"
                        isChecked={status}
                        action={this.callbackFunction}
                    />
                    <CustomSlider brightness={brightness}/>
                </ModalBody>
                <ModalFooter>
                    <Button color="primary" onClick={toggle}>Do Something</Button>{' '}
                    <Button color="secondary" onClick={toggle}>Cancel</Button>
                </ModalFooter>
            </Modal>
        )
    }
}

export default ControlModal;
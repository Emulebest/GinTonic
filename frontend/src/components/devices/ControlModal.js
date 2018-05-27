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
    toggle: (t: any) => any,
    toggleSwitch: (deviceId : number) => void,
    changeBrightness : (deviceId : number) => void
};

type ControlState = {};

class ControlModal extends Component<ControlProps & Device, ControlState> {

    constructor(props : ControlProps & Device){
        super(props);
        const self: any = this;
        self.changeSwitchDevice = this.changeSwitchDevice.bind(this);
        self.changeBrightnessDevice = this.changeBrightnessDevice.bind(this);
    }

    changeSwitchDevice(){
        let {toggleSwitch} = this.props;
        let {id} = this.props;
        toggleSwitch(id);
    }

    changeBrightnessDevice(){
        let {changeBrightness} = this.props;
        let {id} = this.props;
        changeBrightness(id);
    }

    render() : Node {
        let {id, isOpen, toggle, status, brightness} = this.props;
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
                        action={this.changeSwitchDevice}
                    />
                    <CustomSlider
                        id={id}
                        brightness={brightness}
                        changeBrightness={this.changeBrightnessDevice}
                    />
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
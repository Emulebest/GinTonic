// @flow

import React, {Component} from "react";
import {Button, Modal, ModalHeader, ModalBody, ModalFooter, Table, UncontrolledTooltip} from 'reactstrap';
import SwitchButton from 'lyef-switch-button';
import CustomSlider from "./Slider";

import {Icon} from "react-fa";

import type {Node} from 'react';
import type {Device} from "../../types/devices/devices";

import "../../style/toggleButton.css";
import "../../style/ControlPanel.css"
import "../../style/InfoModal.css";

type ControlProps = {
    isOpen: boolean,
    toggle: (t: any) => any,
    toggleSwitch: (deviceId: number) => void,
    changeBrightness: (deviceId: number, brightness: number) => void,
    deleteDevice: (deviceId: number) => void,
    img: string,
    name: string,
    place: string
};

type ControlState = {};

class ControlModal extends Component<ControlProps & Device, ControlState> {

    constructor(props: ControlProps & Device) {
        super(props);
        const self: any = this;
        self.changeSwitchDevice = this.changeSwitchDevice.bind(this);
        self.changeBrightnessDevice = this.changeBrightnessDevice.bind(this);
        self.deleteDevice = this.deleteDevice.bind(this);
    }

    changeSwitchDevice() {
        let {toggleSwitch} = this.props;
        let {id, status} = this.props;
        toggleSwitch(id, !status);
    }

    changeBrightnessDevice(brightness: number) {
        let {changeBrightness} = this.props;
        let {id} = this.props;
        changeBrightness(id, brightness);
    }

    deleteDevice() {
        let {deleteDevice, id} = this.props;
        deleteDevice(id);
        this.props.toggle();
    }

    render(): Node {
        let {id, isOpen, toggle, status, brightness, name, place} = this.props;
        return (
            <Modal isOpen={isOpen} toggle={toggle}>
                <ModalHeader toggle={toggle}>
                    <img alt={name} src={this.props.img} width="80px" height="80px"/>
                </ModalHeader>
                <ModalBody>
                    <Table borderless>
                        <tbody>
                        <tr>
                            <th>NAME</th>
                            <td>{name}</td>
                        </tr>
                        <tr>
                            <th>PLACE</th>
                            <td>{place}</td>
                        </tr>
                        <tr>
                            <td colSpan={2}>
                                <hr/>
                            </td>
                        </tr>
                        <tr>
                            <th><a id="switch-tooltip">TURN</a></th>
                            <UncontrolledTooltip placement="bottom" target="switch-tooltip">
                                Toggle to switch on/off your device
                            </UncontrolledTooltip>
                            <td>
                                <SwitchButton
                                    id="my-button"
                                    labelLeft="OFF"
                                    labelRight="ON"
                                    isChecked={status}
                                    action={this.changeSwitchDevice}
                                />
                            </td>
                        </tr>
                        <tr>
                            <td colSpan={2}>
                                <hr/>
                            </td>
                        </tr>
                        <tr>
                            <th><a id="slider-tooltip">BRIGHTNESS</a></th>
                            <UncontrolledTooltip placement="bottom" target="slider-tooltip">
                                Hold on to control brightness of your device
                            </UncontrolledTooltip>
                            <td>
                                <CustomSlider
                                    id={id}
                                    brightness={brightness}
                                    changeBrightness={this.changeBrightnessDevice}/>
                            </td>
                        </tr>
                        </tbody>

                    </Table>
                </ModalBody>
                < ModalFooter>
                    <Button color="secondary" onClick={toggle}>Close</Button>
                    <Button id="deleteTooltip" color="danger" onClick={this.deleteDevice}>
                        <Icon name="trash"/> Delete
                    </Button>
                    <Button
                        color="success"
                        onClick={toggle}> Save </Button>
                    <UncontrolledTooltip placement="top" target="deleteTooltip">
                        By clicking delete you won't be able to return your device. Are you sure?
                    </UncontrolledTooltip>
                </ModalFooter>
            </Modal>
        )
    }
}

export default ControlModal;
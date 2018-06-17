// @flow

import React, {Component} from "react";
import type {Node} from 'react';
import type {Device} from "../../types/devices/devices";
import AddForm from "./AddForm";
import {Modal, ModalHeader, ModalBody, ModalFooter} from 'reactstrap';

type AddProps = {
    isOpen: boolean,
    toggle: (t: any) => any,
    addDevice: (device: Device) => void
};

type AddState = {};

class AddModal extends Component<AddProps, AddState> {

    render(): Node {
        let {isOpen, toggle, addDevice} = this.props;
        return (
            <div>
                <Modal isOpen={isOpen} toggle={toggle}>
                    <ModalHeader toggle={toggle}>
                        <img src={require("../../images/light1.png")} alt={"add img"} width="80px" height="80px"/>
                        <h3>Add new device</h3>
                        </ModalHeader>
                    <ModalBody>
                        <AddForm onSubmit={addDevice} />
                    </ModalBody>
                    <ModalFooter>
                    </ModalFooter>
                </Modal>
            </div>
        );
    }
}

export default AddModal;


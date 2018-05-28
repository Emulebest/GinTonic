// @flow

import React, {Component} from "react";
import type {Node} from 'react';
import AddForm from "./AddForm";
import {Button, Modal, ModalHeader, ModalBody, ModalFooter} from 'reactstrap';

type AddProps = {
    isOpen: boolean,
    toggle: (t: any) => any
};

type AddState = {};

class AddModal extends Component<AddProps, AddState> {

    handleAddDevice(){
        console.log("New device");
    }

    render(): Node {
        let {isOpen, toggle} = this.props;
        return (
            <div>
                <Modal isOpen={isOpen} toggle={toggle}>
                    <ModalHeader toggle={toggle}>Add new device</ModalHeader>
                    <ModalBody>
                        <AddForm onSubmit={this.handleAddDevice}/>
                    </ModalBody>
                    <ModalFooter>
                        <Button color="secondary" onClick={toggle}>Close</Button>
                    </ModalFooter>
                </Modal>
            </div>
        );
    }
}

export default AddModal;


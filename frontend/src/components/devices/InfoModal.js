// @flow

import React, {Component} from "react";
import type {Node} from 'react';
import {Button, Modal, ModalHeader, ModalBody, ModalFooter} from 'reactstrap';

type InfoProps = {
    isOpen: boolean,
    toggle: (t: any) => any
};
type InfoState = {};

class InfoModal extends Component<InfoProps, InfoState> {
    render() : Node {
        let {isOpen, toggle} = this.props;
        return (
            <Modal isOpen={isOpen} toggle={toggle}>
                <ModalHeader toggle={toggle}>Info panel</ModalHeader>
                <ModalBody>

                </ModalBody>
                <ModalFooter>
                    <Button color="primary" onClick={toggle}>Do Something</Button>{' '}
                    <Button color="secondary" onClick={toggle}>Cancel</Button>
                </ModalFooter>
            </Modal>
        )
    }
}

export default InfoModal;
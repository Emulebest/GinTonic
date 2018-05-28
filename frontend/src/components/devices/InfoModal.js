// @flow

import React, {Component} from "react";
import type {Node} from 'react';
import {Button, Modal, ModalHeader, ModalBody, ModalFooter, Table} from 'reactstrap';

import "../../style/InfoModal.css";

type InfoProps = {
    isOpen: boolean,
    toggle: (t: any) => any,
    img : string,
    brightness : number,
    place : string,
    name : string,
    description : string,
    status : boolean
};

type InfoState = {};

class InfoModal extends Component<InfoProps, InfoState> {
    render(): Node {
        let {isOpen, toggle, brightness, place, name, description} = this.props;
        return (
            <Modal isOpen={isOpen} toggle={toggle}>
                <ModalHeader toggle={toggle}>
                    <img src={this.props.img} alt={name} width="80px" height="80px"/>
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
                        <tr className="status-panel">
                            <th>STATUS</th>
                            <td>
                                <div>{(this.props.status) ? "ON" : "OFF"}</div>
                                <div className={
                                    (this.props.status ?
                                            "switch-indicator indicator-green" :
                                            "switch-indicator indicator-red"
                                    )}></div>
                            </td>
                        </tr>
                        <tr>
                            <th>BRIGHTNESS</th>
                            <td>{brightness + "%"}</td>
                        </tr>
                        <tr>
                            <td colSpan={2}>
                                <hr/>
                            </td>
                        </tr>
                        <tr>
                            <th>DESCRIPTION</th>
                            <td>{description}</td>
                        </tr>
                        </tbody>
                    </Table>
                </ModalBody>
                <ModalFooter>
                    <Button color="secondary" onClick={toggle}>Close</Button>
                </ModalFooter>
            </Modal>
        )
    }
}

export default InfoModal;
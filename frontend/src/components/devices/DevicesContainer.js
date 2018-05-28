// @flow

import lodash from "lodash";
import React, {Component} from "react";
import {Container, Row, Jumbotron, Button, Col, UncontrolledTooltip} from "reactstrap";
import type {Node} from 'react';
import DeviceBlock from "./Device";
import type {Device} from "../../types/devices/devices";
import {getDevices} from "../../actions/devices/allDevices";
import {switchDevice} from "../../actions/devices/switch";
import {changeBrightness} from "../../actions/devices/brightness";
import type{Dispatch} from "../../types/general";
import AddModal from "./AddModal";
import {addDevice} from "../../actions/devices/add";
import {deleteDevice} from "../../actions/devices/delete";


type DeviceContainerProps = {
    devices: Array<Device>,
    dispatch: Dispatch,
    toggleSwitch: (deviceId: number) => void
};
type DeviceContainerState = {
    modalAdd: boolean
};

class DeviceContainer extends Component<DeviceContainerProps, DeviceContainerState> {

    constructor(props: DeviceContainerProps) {
        super(props);

        this.state = {
            modalAdd: false
        };

        const self: any = this;
        self.toggleSwitch = this.toggleSwitch.bind(this);
        self.changeBrightness = this.changeBrightness.bind(this);
        self.toggleAddModal = this.toggleAddModal.bind(this);
        self.addDevice = this.addDevice.bind(this);
        self.deleteDevice = this.deleteDevice.bind(this);
    }

    componentWillMount() {
        let userId = 1;
        this.props.dispatch(getDevices(userId));
    }

    toggleSwitch(deviceId: number) {
        this.props.dispatch(switchDevice(deviceId));
    }

    changeBrightness(deviceId: number, brightness: number) {
        this.props.dispatch(changeBrightness(deviceId, brightness));
    }

    divideDevices() {
        return lodash.chunk(this.props.devices, 3);
    }

    toggleAddModal() {
        this.setState({
            modalAdd: !this.state.modalAdd
        });
    }

    addDevice(data: Device) {
        this.props.dispatch(addDevice(data));
        this.toggleAddModal();
    }

    deleteDevice(deviceId: number) {
        this.props.dispatch(deleteDevice(deviceId));
    }

    renderNested = (row: Array<Device>): Array<Node> => {
        return (
            row.map((device: Device) => {
                let {id} = device;
                return (
                    <DeviceBlock
                        key={id}
                        {...device}
                        deleteDevice={this.deleteDevice}
                        toggleSwitch={this.toggleSwitch}
                        changeBrightness={this.changeBrightness}
                    />
                )
            })
        )
    };

    render(): Node {
        let {devices} = this.props;
        let splitDevices = (devices) ? this.divideDevices() : [];
        return (
            <Jumbotron>

                <Container>
                    <Row className="row-devices">
                        <Col md="11">
                            <h1>My connected devices</h1>
                        </Col>
                        <Col md="1">
                            <Button
                                onClick={this.toggleAddModal}
                                id="add-tooltip"
                                size="lg"
                                className="btn-add-device"
                                color="success">+</Button>
                            <AddModal
                                addDevice={this.addDevice}
                                isOpen={this.state.modalAdd}
                                toggle={this.toggleAddModal}
                            />
                            <UncontrolledTooltip placement="left" target="add-tooltip">
                                Add new device to your collection
                            </UncontrolledTooltip>
                        </Col>


                    </Row>
                    {
                        splitDevices.map((rowData: Array<Device>, i: number) => {
                            return (
                                <Row key={i} className="row-devices">
                                    {this.renderNested(rowData)}
                                </Row>
                            )
                        }, this)
                    }
                </Container>
            </Jumbotron>
        )
    }
}

export default DeviceContainer;
// @flow

import lodash from "lodash";
import React, {Component} from "react";
import {Container, Row, Jumbotron} from "reactstrap";
import type {Node} from 'react';
import DeviceBlock from "./Device";
import type {Device} from "../../types/devices/devices";
import {getDevices} from "../../actions/devices/allDevices";
import {switchDevice} from "../../actions/devices/switch";
import {changeBrightness} from "../../actions/devices/brightness";
import type{Dispatch} from "../../types/general";

type DeviceContainerProps = {
    devices: Array<Device>,
    dispatch: Dispatch,
    toggleSwitch : (deviceId : number) => void
};
type DeviceContainerState = {};

class DeviceContainer extends Component<DeviceContainerProps, DeviceContainerState> {
    
    constructor(props : DeviceContainerProps){
        super(props);
        const self: any = this;
        self.toggleSwitch = this.toggleSwitch.bind(this);
        self.changeBrightness = this.changeBrightness.bind(this);
    }

    componentWillMount() {
        let userId = 1;
        this.props.dispatch(getDevices(userId));
    }

    toggleSwitch(deviceId : number){
        this.props.dispatch(switchDevice(deviceId));
    }

    changeBrightness(deviceId : number){
        this.props.dispatch(changeBrightness(deviceId));
    }

    divideDevices() {
        return lodash.chunk(this.props.devices, 3);
    }

    renderNested = (row: Array<Device>):Array<Node> => {
        return (
            row.map((device : Device) => {
                let {id} = device;
                return (
                    <DeviceBlock
                        key={id}
                        {...device}
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
                        <h1>My connected devices</h1>
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
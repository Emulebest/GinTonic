// @flow

import React, {Component} from "react";
import {Col} from "reactstrap";
import {Container, Row, Button} from "reactstrap";
import type {Node} from 'react';
import type {Device} from "../types/devices";
import "../style/Device.css";


type DeviceProps = {
    status : boolean
};
type DeviceState = {
    imgArr: Array<string>,
    lightParams: Array<string>,
    status : boolean
};

class DeviceBlock extends Component<DeviceProps, DeviceState> {

    constructor(props: DeviceProps) {
        super(props);
        this.state = {
            imgArr: [
                require("../images/light1.png"),
                require("../images/light2.png"),
                require("../images/light3.png"),
                require("../images/light4.png"),
                require("../images/light5.png")],
            lightParams: ["status", "place", "brightness"]
        }
    }

    getParamValue(paramKey: string, paramValue: string): string {
        switch (paramKey) {
            case "status":
                return (paramValue) ? "ON" : "OFF";
            case "brightness":
                return `${paramValue} %`;
            default :
                return paramValue;
        }
    }

    render(): Node {
        let imgIndex: number = Math.floor(Math.random() * this.state.lightParams.length);
        let img: string = this.state.imgArr[imgIndex];

        //let {device} : {device : Device} = this.props;

        return (
            <Col md="4" className="container-device">
                <Container className="container-device-content">
                    <Row className="device-content">
                        <Col md="5">
                            <img alt="" src={img}
                                 width="100%" height="100%"/>
                        </Col>
                        <Col md="5">
                            <div className="light-param">
                                <Row>
                                    {
                                        this.state.lightParams.map(lightParam => {
                                            let paramVal : string = this.props[lightParam];
                                            return (
                                                <React.Fragment>
                                                    <Col md="5">
                                                        <h5>{lightParam[0].toUpperCase() + " :"}</h5>
                                                    </Col>
                                                    <Col md="7">
                                                        <h5>{this.getParamValue(lightParam, paramVal)}</h5>
                                                    </Col>
                                                </React.Fragment>
                                            )
                                        })
                                    }

                                </Row>
                            </div>
                        </Col>
                        <Col md="2">
                            <div className="switch-indicator"></div>
                        </Col>
                    </Row>
                    <Row className="control-panel">
                        <Col md="6">
                            <Button color="primary" block>INFO</Button>
                        </Col>
                        <Col md="6">
                            <Button color="success" block>CONTROL</Button>
                        </Col>
                    </Row>
                </Container>
            </Col>
        )
    }
}

export default DeviceBlock;
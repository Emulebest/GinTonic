// @flow

import {
    ADD_DEVICE_REQUEST,
    ADD_DEVICE_FAILURE,
    ADD_DEVICE_SUCCESS
} from "../../constants/actionTypes";

import type{Device} from "./devices";

const ADD_DEVICE_ACTIONS = {
    ADD_DEVICE_REQUEST,
    ADD_DEVICE_FAILURE,
    ADD_DEVICE_SUCCESS
};

export type DeviceInfoAdd = {
    name: string,
    http: string,
    place: string,
    description: string
}

type AddDeviceRequest = {
    type: $Values<typeof ADD_DEVICE_ACTIONS>,
    payload: {
        device : DeviceInfoAdd
    }
}

type AddDeviceSuccess = {
    type: $Values<typeof ADD_DEVICE_ACTIONS>,
    payload: {
        device: DeviceInfoAdd & Device
    }
}

type AddDeviceFailure = {
    type: $Values<typeof ADD_DEVICE_ACTIONS>,
    payload: {
        message: string, status: number
    }
};

export type AddDeviceAction = AddDeviceRequest | AddDeviceFailure | AddDeviceSuccess;
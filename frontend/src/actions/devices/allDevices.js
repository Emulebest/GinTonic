// @flow

import {
    ALL_DEVICES_REQUEST,
    ALL_DEVICES_SUCCESS,
    ALL_DEVICES_FAILURE
} from "../../constants/actionTypes";
import type {AllDevicesAction, Device} from "../../types/devices";
import type {RequestError} from "../../types/general";

export const getDevices = (userId: number): AllDevicesAction => {
    return {
        type: ALL_DEVICES_REQUEST,
        payload: {
            userId
        }
    }
};

export const getDevicesSuccess = (devices: Array<Device>): AllDevicesAction => {
    return {
        type: ALL_DEVICES_SUCCESS,
        payload: {
            devices
        }
    }
};

export const getDevicesFailure = (error: RequestError): AllDevicesAction => {
    let message = error.response.data.message;
    let {status} = error.response;
    return {
        type: ALL_DEVICES_FAILURE,
        payload: {
            message, status
        }
    }
};
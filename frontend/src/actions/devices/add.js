// @flow

import {
    ADD_DEVICE_REQUEST,
    ADD_DEVICE_SUCCESS,
    ADD_DEVICE_FAILURE
} from "../../constants/actionTypes";

import type {AddDeviceAction} from "../../types/devices/add";
import type {RequestError} from "../../types/general";
import type {Device} from "../../types/devices/devices";

export const addDevice = (device: Device): AddDeviceAction => {
    return {
        type: ADD_DEVICE_REQUEST,
        payload: {
            device
        }
    }
};

export const addDeviceSuccess = (device: Device): AddDeviceAction => {
    return {
        type: ADD_DEVICE_SUCCESS,
        payload: {
            device
        }
    }
};

export const addDeviceFailure = (error: RequestError): AddDeviceAction => {
    let {message} = error.response.data;
    let {status} = error.response;
    return {
        type: ADD_DEVICE_FAILURE,
        payload: {
            message, status
        }
    }
};
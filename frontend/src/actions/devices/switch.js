// @flow

import {
    SWITCH_REQUEST,
    SWITCH_SUCCESS,
    SWITCH_FAILURE
} from "../../constants/actionTypes";

import type {SwitchAction} from "../../types/devices/switch";
import type {RequestError} from "../../types/general";

export const switchDevice = (deviceId: number): SwitchAction => {
    return {
        type: SWITCH_REQUEST,
        payload: {
            deviceId
        }
    }
};

export const switchDeviceSuccess = (deviceId: number, message: string): SwitchAction => {
    return {
        type: SWITCH_SUCCESS,
        payload: {
            deviceId,
            message
        }
    }
};

export const switchDeviceFailure = (error: RequestError): SwitchAction => {
    let {message} = error.response.data;
    let {status} = error.response;
    return {
        type: SWITCH_FAILURE,
        payload: {
            message, status
        }
    }
};
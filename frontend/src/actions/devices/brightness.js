// @flow
import {
    CHANGE_BRIGHTNESS_REQUEST,
    CHANGE_BRIGHTNESS_SUCCESS,
    CHANGE_BRIGHTNESS_FAILURE
} from "../../constants/actionTypes";

import type{RequestError} from "../../types/general";
import type {SwitchAction} from "../../types/devices/switch";
import type {BrightnessAction} from "../../types/devices/brightness";
import type {Device} from "../../types/devices/devices";

export const changeBrightness = (deviceId: number, brightness : number): BrightnessAction => {
    return {
        type: CHANGE_BRIGHTNESS_REQUEST,
        payload: {
            deviceId
        }
    }
};

export const changeBrightnessSuccess = (device: Device): BrightnessAction => {
    return {
        type: CHANGE_BRIGHTNESS_SUCCESS,
        payload: {
            device
        }
    }
};

export const changeBrightnessError = (error: RequestError): SwitchAction => {
    let {message} = error.response.data;
    let {status} = error.response;
    return {
        type: CHANGE_BRIGHTNESS_FAILURE,
        payload: {
            message, status
        }
    }
};

// @flow

import {
    CHANGE_BRIGHTNESS_REQUEST,
    CHANGE_BRIGHTNESS_SUCCESS,
    CHANGE_BRIGHTNESS_FAILURE
} from "../../constants/actionTypes";

const BRIGHTNESS_ACTIONS = {
    CHANGE_BRIGHTNESS_REQUEST,
    CHANGE_BRIGHTNESS_SUCCESS,
    CHANGE_BRIGHTNESS_FAILURE
};

type BrightnessRequest = {
    type: $Values<typeof BRIGHTNESS_ACTIONS>,
    payload: {
        deviceId: number
    }
};

type BrightnessSuccess = {
    type: $Values<typeof BRIGHTNESS_ACTIONS>,
    payload: {
        deviceId: number,
        message: string
    }
};

type BrightnessFailure = {
    type: $Values<typeof BRIGHTNESS_ACTIONS>,
    payload: {
        message: string, status: number
    }

};

export type BrightnessAction = BrightnessRequest | BrightnessFailure | BrightnessSuccess;


// @flow

import {
    CHANGE_BRIGHTNESS_REQUEST,
    CHANGE_BRIGHTNESS_SUCCESS,
    CHANGE_BRIGHTNESS_FAILURE
} from "../../constants/actionTypes";

import type{Device} from "./devices";

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
        device: Device
    }
};

type BrightnessFailure = {
    type: $Values<typeof BRIGHTNESS_ACTIONS>,
    payload: {
        message: string, status: number
    }

};

export type BrightnessAction = BrightnessRequest | BrightnessFailure | BrightnessSuccess;


// @flow
import {ALL_DEVICES_REQUEST, ALL_DEVICES_SUCCESS, ALL_DEVICES_FAILURE} from "../../constants/actionTypes";
import type {SwitchAction} from "./switch";
import type {BrightnessAction} from "./brightness";

const ALL_DEVICES_ACTIONS = {
    ALL_DEVICES_REQUEST, ALL_DEVICES_FAILURE, ALL_DEVICES_SUCCESS
};

type AllDevicesRequest = {
    type: $Values<typeof ALL_DEVICES_ACTIONS>,
    payload: {
        userId: number
    }
}

export type Device = {
    id: number,
    status: boolean,
    place: string,
    brightness: number
};

type AllDevicesSuccess = {
    type: $Values<typeof ALL_DEVICES_ACTIONS>,
    payload: {
        devices: Array<Device>
    }
}

type AllDevicesFailure = {
    type: $Values<typeof ALL_DEVICES_ACTIONS>,
    payload: {
        message: string, status: number
    }
}

export type AllDevicesAction = AllDevicesRequest | AllDevicesSuccess | AllDevicesFailure;
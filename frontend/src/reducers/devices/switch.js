// @flow

import {
    SWITCH_REQUEST,
    SWITCH_SUCCESS,
    SWITCH_FAILURE
} from "../../constants/actionTypes";
import type {SwitchAction} from "../../types/devices/switch";

import type {InitialState} from "../../types/general";

export default (state: InitialState, action: any): InitialState => {
    switch (action.type) {
        case SWITCH_REQUEST:
            return {
                ...state,
                isFetching: true
            };
        case SWITCH_SUCCESS:
            return {
                ...state,
                isFetching: false,
                data: updateDevices(state.data.devices, action.payload.device),
                message: null,
                status: 200
            };
        case SWITCH_FAILURE:
            return {
                ...state,
                ...action.payload,
                isFetching: false,
                data: null
            };
        default:
            return state;
    }
}

const updateDevices = (devices, updDevice) => {
    return {
        devices: devices.map(item => {
            return (item.id === updDevice.id) ? updDevice : item;
        })
    }
};
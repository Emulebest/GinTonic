// @flow

import {
    CHANGE_BRIGHTNESS_FAILURE,
    CHANGE_BRIGHTNESS_SUCCESS,
    CHANGE_BRIGHTNESS_REQUEST
} from "../../constants/actionTypes";

import type {InitialState} from "../../types/general";

export default (state: InitialState, action: any): InitialState => {
    switch (action.type) {
        case CHANGE_BRIGHTNESS_REQUEST:
            return {
                ...state,
                isFetching: true
            };
        case CHANGE_BRIGHTNESS_SUCCESS:
            return {
                ...state,
                isFetching: false,
                data: updateDevices(state.data.devices, action.payload.device),
                message: null,
                status: 200
            };
        case CHANGE_BRIGHTNESS_FAILURE:
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
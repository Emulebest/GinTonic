// @flow

import {
    ADD_DEVICE_REQUEST,
    ADD_DEVICE_SUCCESS,
    ADD_DEVICE_FAILURE
} from "../../constants/actionTypes";

import type {InitialState} from "../../types/general";

export default (state: InitialState, action: any): InitialState => {
    switch (action.type) {
        case ADD_DEVICE_REQUEST:
            return {
                ...state,
                isFetching: true
            };
        case ADD_DEVICE_SUCCESS:
            return {
                ...state,
                isFetching: false,
                data: addDevice(state.data.devices, action.payload.device),
                message: null,
                status: 200
            };
        case ADD_DEVICE_FAILURE:
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

const addDevice = (devices, device) => {
    return {
        devices: devices.push(device)
    }
};
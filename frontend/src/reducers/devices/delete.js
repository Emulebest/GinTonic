// @flow

import {
    DELETE_DEVICE_REQUEST,
    DELETE_DEVICE_FAILURE,
    DELETE_DEVICE_SUCCESS
} from "../../constants/actionTypes";

import type {InitialState} from "../../types/general";


export default (state: InitialState, action: any): InitialState => {
    switch (action.type) {
        case DELETE_DEVICE_REQUEST:
            return {
                ...state,
                isFetching: true
            };
        case DELETE_DEVICE_SUCCESS:
            return {
                ...state,
                isFetching: false,
                data: deleteDevice(state.data.devices, action.payload.deviceId),
                message: null,
                status: 200
            };
        case DELETE_DEVICE_FAILURE:
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

const deleteDevice = (devices, deviceId) => {
    return {
        devices: devices.filter((device) => {
            return device.id !== deviceId
        })
    }
};

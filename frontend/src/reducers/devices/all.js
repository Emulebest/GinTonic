// @flow

import {
    ALL_DEVICES_REQUEST,
    ALL_DEVICES_SUCCESS,
    ALL_DEVICES_FAILURE,
    SWITCH_REQUEST,
    SWITCH_SUCCESS,
    SWITCH_FAILURE, CHANGE_BRIGHTNESS_REQUEST, CHANGE_BRIGHTNESS_SUCCESS, CHANGE_BRIGHTNESS_FAILURE
} from "../../constants/actionTypes";
import type {InitialState} from "../../types/general";
import type {AllDevicesAction} from "../../types/devices/devices";
import type {SwitchAction} from "../../types/devices/switch";
import type {BrightnessAction} from "../../types/devices/brightness";

const initialState = {
    data: {},
    status: null,
    message: null
};

type t =  AllDevicesAction | SwitchAction | BrightnessAction;

export default (state: InitialState = initialState, action : any): InitialState => {
    switch (action.type) {
        case ALL_DEVICES_REQUEST :
            return {...state, isFetching: true};
        case ALL_DEVICES_SUCCESS:
            return {
                ...state,
                isFetching: false,
                data: action.payload,
                message: null,
                status: 200
            };
        case ALL_DEVICES_FAILURE:
            return {
                ...state,
                ...action.payload,
                isFetching: false,
                data: null
            };
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
        case CHANGE_BRIGHTNESS_REQUEST:
            return {...state, isFetching: true};
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
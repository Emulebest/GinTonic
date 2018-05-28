// @flow

import {
    ALL_DEVICES_REQUEST,
    ALL_DEVICES_SUCCESS,
    ALL_DEVICES_FAILURE,
    SWITCH_REQUEST,
    SWITCH_SUCCESS,
    SWITCH_FAILURE, CHANGE_BRIGHTNESS_REQUEST, CHANGE_BRIGHTNESS_SUCCESS, CHANGE_BRIGHTNESS_FAILURE,
    ADD_DEVICE_REQUEST, ADD_DEVICE_SUCCESS, ADD_DEVICE_FAILURE,
    DELETE_DEVICE_REQUEST, DELETE_DEVICE_FAILURE, DELETE_DEVICE_SUCCESS
} from "../../constants/actionTypes";

import type {InitialState} from "../../types/general";

import switchReducer from "./switch";
import brightnessReducer from "./brightness";
import getAllReducer from "./getAll";
import addDeviceReducer from "./add";
import deleteDeviceReducer from "./delete";

const initialState = {
    data: {},
    status: null,
    message: null
};

type Reducer = {
    types: Array<string>,
    method: (state: InitialState, action: any) => InitialState;
}


const deviceReducers: Array<Reducer> = [
    {
        types: [SWITCH_FAILURE, SWITCH_SUCCESS, SWITCH_REQUEST],
        method: switchReducer,
    },
    {
        types: [ALL_DEVICES_SUCCESS, ALL_DEVICES_FAILURE, ALL_DEVICES_REQUEST],
        method: getAllReducer
    },
    {
        types: [CHANGE_BRIGHTNESS_REQUEST, CHANGE_BRIGHTNESS_FAILURE, CHANGE_BRIGHTNESS_SUCCESS],
        method: brightnessReducer
    },
    {
        types: [ADD_DEVICE_REQUEST, ADD_DEVICE_SUCCESS, ADD_DEVICE_FAILURE],
        method: addDeviceReducer
    },
    {
        types: [DELETE_DEVICE_REQUEST, DELETE_DEVICE_FAILURE, DELETE_DEVICE_SUCCESS],
        method: deleteDeviceReducer
    }

];

const getActionIndex = (types: Array<string>, actionType: string): number => {
    return types.indexOf(actionType);
};

const getReducer = (actionType: string): Array<Reducer> => {
    return deviceReducers.filter((groupObj: Reducer) => {
        return getActionIndex(groupObj.types, actionType) !== -1;
    });
};


const deviceReducer = (state: InitialState = initialState, action: any): InitialState => {
    let {type} = action;
    let reducer = getReducer(type);
    return (reducer.length && reducer[0].method) ? reducer[0].method(state, action) : state;
};

export default deviceReducer;
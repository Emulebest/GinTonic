// @flow

import {ALL_DEVICES_REQUEST, ALL_DEVICES_SUCCESS, ALL_DEVICES_FAILURE} from "../../constants/actionTypes";
import type {InitialState} from "../../types/general";
import type {AllDevicesAction} from "../../types/devices";

const initialState = {
    data: {},
    status: null,
    message: null
};

export default (state: InitialState = initialState, action: AllDevicesAction): InitialState => {
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
        default:
            return state;
    }
}
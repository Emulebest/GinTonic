// @flow

import {
    ALL_DEVICES_REQUEST,
    ALL_DEVICES_FAILURE,
    ALL_DEVICES_SUCCESS
} from "../../constants/actionTypes";

import type {InitialState} from "../../types/general";

export default (state: InitialState, action: any): InitialState => {
    switch (action.type) {
        case ALL_DEVICES_REQUEST:
            return {
                ...state,
                isFetching: true
            };
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

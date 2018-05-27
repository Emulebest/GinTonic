// @flow

import {
    CHANGE_BRIGHTNESS_REQUEST,
    CHANGE_BRIGHTNESS_SUCCESS,
    CHANGE_BRIGHTNESS_FAILURE
} from "../../constants/actionTypes";

import type {InitialState} from "../../types/general";
import type {BrightnessAction} from "../../types/devices/brightness";

const initialState = {
    data: {},
    status: null,
    message: null
};

export default (state: InitialState = initialState, action: BrightnessAction): InitialState => {
    switch (action.type) {
        case CHANGE_BRIGHTNESS_REQUEST:
            return {...state, isFetching: true};
        case CHANGE_BRIGHTNESS_SUCCESS:
            return {
                ...state,
                isFetching: false,
                data: action.payload,
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
        default :
            return state;
    }
}

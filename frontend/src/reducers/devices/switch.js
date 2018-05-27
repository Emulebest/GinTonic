// @flow

import {
    SWITCH_REQUEST,
    SWITCH_FAILURE,
    SWITCH_SUCCESS
} from "../../constants/actionTypes";

import type {InitialState} from "../../types/general";
import type {SwitchAction} from "../../types/devices/switch";

const initialState = {
    data: {},
    status: null,
    message: null
};

export default (state: InitialState = initialState, action: SwitchAction): InitialState => {
    switch (action.type) {
        case SWITCH_REQUEST:
            return {...state, isFetching: true};
        case SWITCH_SUCCESS:
            return {
                ...state,
                isFetching: false,
                data: action.payload,
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
        default :
            return state;
    }
}

// @flow

import {
    REGISTER_REQUEST,
    REGISTER_SUCCESS,
    REGISTER_FAILURE
} from "../../constants/actionTypes";
import type {InitialState, Action} from "../../types/general";

const initialState = {
    data: {},
    error: {},
    message: null
};

export default (state: InitialState = initialState, action: Action) => {
    switch (action.type) {
        case REGISTER_REQUEST :
            return {
                ...state,
                isFetching: true
            };
        case REGISTER_SUCCESS:
            return {
                ...state,
                isFetching: false,
                data: action.payload,
                message: null,
                error: null
            };
        case REGISTER_FAILURE:
            return {
                ...state,
                isFetching: false,
                data: null,
                error: action.payload.response.status,
                message: action.payload.response.data.message
            };
        default:
            return state;
    }
}
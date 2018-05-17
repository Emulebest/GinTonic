// @flow

import {
    LOGIN_REQUEST,
    LOGIN_SUCCESS,
    LOGIN_FAILURE,
    LOGOUT
} from "../../constants/actionTypes";
import type {InitialState, Action} from "../../types/general";

const initialState = {
    data: {},
    error: {},
    message: null
};

export default (state: InitialState = initialState, action: Action) => {
    switch (action.type) {
        case LOGIN_REQUEST :
            return {...state, isFetching: true};
        case LOGIN_SUCCESS:
            return {
                ...state,
                isFetching: false,
                data: action.payload,
                token: action.payload.token,
                message: null,
                error: null
            };
        case LOGIN_FAILURE:
            return {
                ...state,
                isFetching: false,
                data: null,
                error: action.payload.response.status,
                message: action.payload.response.data.message
            };
        case LOGOUT:
            return {...state, token: null};
        default:
            return state;
    }
}
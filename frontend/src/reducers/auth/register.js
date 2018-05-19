// @flow
import {
    REGISTER_REQUEST,
    REGISTER_SUCCESS,
    REGISTER_FAILURE
} from "../../constants/actionTypes";
import type {InitialState} from "../../types/general";
import type {RegisterAction} from "../../types/auth/register";

const initialState = {
    data: {},
    status : null,
    message: null
};

export default (state: InitialState = initialState, action: RegisterAction) => {
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
                ...action.payload,
                isFetching: false,
                data: null
            };
        default:
            return state;
    }
}
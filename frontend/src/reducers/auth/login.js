// @flow
import {
    LOGIN_REQUEST,
    LOGIN_SUCCESS,
    LOGIN_FAILURE,
    LOGOUT
} from "../../constants/actionTypes";
import type {InitialState} from "../../types/general";
import type {LoginAction, LogoutAction} from "../../types/auth/login";

const initialState = {
    data: {},
    status : null,
    message: null
};

export default (state: InitialState = initialState, action: LoginAction | LogoutAction): InitialState => {
    switch (action.type) {
        case LOGIN_REQUEST :
            return {...state, isFetching: true};
        case LOGIN_SUCCESS:
            return {
                ...state,
                isFetching: false,
                data: action.payload,
                message: null,
                error: null
            };
        case LOGIN_FAILURE:
            return {
                ...state,
                ...action.payload,
                isFetching: false,
                data: null

            };
        case LOGOUT:
            return {...state, token: null};
        default:
            return state;
    }
}
// @flow
import {
    LOGIN_REQUEST,
    LOGIN_SUCCESS,
    LOGIN_FAILURE,
    LOGOUT
} from "../../constants/actionTypes";

import type{LoginType, LoginTypeSuccess, User} from "../../types/auth";
import type {Action, RequestError} from "../../types/general";

export const login = (payload: LoginType): Action => {
    return {
        type: LOGIN_REQUEST,
        payload
    }
};

export const loginSuccess = (payload: {...LoginTypeSuccess, ...User}): Action => {
    return {
        type: LOGIN_SUCCESS,
        payload
    }
};

export const loginFailure = (payload: RequestError): Action => {
    return {
        type: LOGIN_FAILURE,
        payload
    }
};

export const logout = (): Action => {
    return {
        type: LOGOUT,
        payload: null
    }
};


// @flow
import {
    LOGIN_REQUEST,
    LOGIN_SUCCESS,
    LOGIN_FAILURE,
    LOGOUT
} from "../../constants/actionTypes";

import type{User} from "../../types/auth/index";
import type {RequestError} from "../../types/general";
import type {LoginAction, LogoutAction} from "../../types/auth/login";

export const login = (email: string, password: string): LoginAction => {
    return {
        type: LOGIN_REQUEST,
        payload: {
            email, password
        }
    }
};

export const loginSuccess = (token: string, user: User): LoginAction => {
    return {
        type: LOGIN_SUCCESS,
        payload: {
            token, user
        }
    }
};

export const loginFailure = (error: RequestError): LoginAction => {
    let message = error.response.data.message;
    let {status} = error.response;
    return {
        type: LOGIN_FAILURE,
        payload: {
            message, status
        }
    }
};

export const logout = (): LogoutAction => {
    return {
        type: LOGOUT,
        payload: null
    }
};


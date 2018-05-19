// @flow

import {LOGIN_REQUEST, LOGIN_SUCCESS, LOGIN_FAILURE, LOGOUT} from "../../constants/actionTypes";
import type{User} from "./index";

const LOGIN_ACTIONS = {
    LOGIN_REQUEST, LOGIN_SUCCESS, LOGIN_FAILURE
};

const LOGOUT_ACTIONS = {
    LOGOUT
};

export type LoginCredentials = {
    email: string,
    password: string
}

export type LoginResponseSuccess = {
    token: string,
    user: User
}

type LoginRequest = {
    type: $Values<typeof LOGIN_ACTIONS>,
    payload: LoginCredentials

}
type LoginSuccess = {
    type: $Values<typeof LOGIN_ACTIONS>,
    payload: LoginResponseSuccess
}

type LoginFailure = {
    type: $Values<typeof LOGIN_ACTIONS>,
    payload: {
        message: string, status: number
    }
}

export type LoginAction =  LoginRequest | LoginSuccess | LoginFailure;
export type LogoutAction = {
    type: $Values<typeof LOGOUT_ACTIONS>,
    payload: null
}
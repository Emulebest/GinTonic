// @flow
import {REGISTER_REQUEST, REGISTER_SUCCESS, REGISTER_FAILURE} from "../../constants/actionTypes";
import type{User} from "./index";

export type RegisterCredentials = {|
    email: string,
    password: string,
    userName: string,
    confirmPassword: string
|}

const REGISTER_ACTIONS = {
    REGISTER_REQUEST,
    REGISTER_SUCCESS,
    REGISTER_FAILURE
};


type RegisterRequest = {
    type: $Values<typeof REGISTER_ACTIONS>,
    payload: RegisterCredentials
}

type RegisterSuccess = {
    type: $Values<typeof REGISTER_ACTIONS>,
    payload: User
}

type RegisterFailure = {
    type: $Values<typeof REGISTER_ACTIONS>,
    payload: {
        message: string, status: number
    }
}

export type RegisterAction = | RegisterRequest | RegisterSuccess | RegisterFailure;
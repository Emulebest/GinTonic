// @flow
import {
    REGISTER_REQUEST,
    REGISTER_SUCCESS,
    REGISTER_FAILURE
} from "../../constants/actionTypes";
import type {RegisterType, User} from "../../types/auth";
import type {Action, RequestError} from "../../types/general";

export const register = (payload: RegisterType): Action => {
    return {
        type: REGISTER_REQUEST,
        payload
    }
};

export const registerSuccess = (payload: User): Action => {
    return {
        type: REGISTER_SUCCESS,
        payload
    }
};

export const registerFailure = (payload: RequestError): Action => {
    return {
        type: REGISTER_FAILURE,
        payload
    }
};


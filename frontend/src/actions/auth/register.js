// @flow
import {
    REGISTER_REQUEST,
    REGISTER_SUCCESS,
    REGISTER_FAILURE
} from "../../constants/actionTypes";
import type {User} from "../../types/auth/index";
import type {RequestError} from "../../types/general";
import type{RegisterAction} from "../../types/auth/register";

export const register = (email: string,
                         password: string,
                         confirmPassword: string,
                         userName: string, history): RegisterAction => {
    return {
        type: REGISTER_REQUEST,
        payload: {
            email, password, confirmPassword, userName, history
        }
    }
};

export const registerSuccess = (user: User): RegisterAction => {
    return {
        type: REGISTER_SUCCESS,
        payload: {
            user
        }
    }
};

export const registerFailure = (error: RequestError): RegisterAction => {
    let message = error.response.data.error;
    let {status} = error.response;
    return {
        type: REGISTER_FAILURE,
        payload: {
            message, status
        }
    }
};


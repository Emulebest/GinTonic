import {
    LOGIN_REQUEST,
    LOGIN_SUCCESS,
    LOGIN_FAILURE,
    LOGOUT
} from "../../constants/actionTypes";

export const login = (payload) => {
    return {
        type: LOGIN_REQUEST,
        payload
    }
};

export const loginSuccess = (payload) => {
    return {
        type: LOGIN_SUCCESS,
        payload
    }
};

export const loginFailure = (payload) => {
    return {
        type: LOGIN_FAILURE,
        payload
    }
};

export const logout = (payload) => {
    return {
        type: LOGOUT,
        payload
    }
};


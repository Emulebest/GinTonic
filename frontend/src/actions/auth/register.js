import {
    REGISTER_REQUEST,
    REGISTER_SUCCESS,
    REGISTER_FAILURE
} from "../../constants/actionTypes";

export const register = (payload) => {
    return {
        type: REGISTER_REQUEST,
        payload
    }
};

export const registerSuccess = (payload) => {
    return {
        type: REGISTER_SUCCESS,
        payload
    }
};

export const registerFailure = (payload) => {
    return {
        type: REGISTER_FAILURE,
        payload
    }
};


import {
    GET_WALLET_FAILURE,
    GET_WALLET_REQUEST,
    GET_WALLET_SUCCESS
} from "../../constants/actionTypes";

export const getWalletRequest = (pubKey) => {
    return {
        type: GET_WALLET_REQUEST,
        payload: {
            pubKey
        }
    }
};

export const getWalletSuccess = (amount) => {
    return {
        type: GET_WALLET_SUCCESS,
        payload: {
            amount
        }
    }
};

export const getWalletFailure = (error) => {
    let message = error.response.data.message;
    let {status} = error.response;
    return {
        type: GET_WALLET_FAILURE,
        payload: {
            message, status
        }
    }
};
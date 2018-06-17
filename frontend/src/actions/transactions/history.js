import {
    GET_TRANSACTION_HISTORY_FAILURE,
    GET_TRANSACTION_HISTORY_REQUEST,
    GET_TRANSACTION_HISTORY_SUCCESS
} from "../../constants/actionTypes";

export const getHistory = () => {
    return {
        type: GET_TRANSACTION_HISTORY_REQUEST,
        payload: {}
    }
};

export const getHistorySuccess = (transactions) => {
    return {
        type: GET_TRANSACTION_HISTORY_SUCCESS,
        payload: {
            transactions
        }
    }
};

export const getHistoryFailure = (error) => {
    let message = error.response.data.message;
    let {status} = error.response;
    return {
        type: GET_TRANSACTION_HISTORY_FAILURE,
        payload: {
            message, status
        }
    }
};
import {
    SEND_MONEY_REQUEST,
    SEND_MONEY_SUCCESS,
    SEND_MONEY_FAILURE
} from "../../constants/actionTypes";

export const sendMoneyRequest = (from, to, amount, prKey) => {
    return {
        type: SEND_MONEY_REQUEST,
        payload: {
            from, to, amount, prKey
        }
    }
};

export const sendMoneySuccess = (amount) => {
    return {
        type: SEND_MONEY_SUCCESS,
        payload: {
            amount
        }
    }
};

export const sendMoneyFailure = (error) => {
    let message = error.response.data.message;
    let {status} = error.response;
    return {
        type: SEND_MONEY_FAILURE,
        payload: {
            message, status
        }
    }
};
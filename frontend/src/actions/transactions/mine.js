import {GET_TRANSACTION_HISTORY_FAILURE, MINE_FAILURE, MINE_REQUEST, MINE_SUCCESS} from "../../constants/actionTypes";

export const mineRequest = (pubKey) => {
    return {
        type: MINE_REQUEST,
        payload: {pubKey}
    }
};

export const mineSuccess = (res) => {
    return {
        type: MINE_SUCCESS,
        payload: {
            res
        }
    }
};

export const mineFailure = (error) => {
    let message = error.response.data.message;
    let {status} = error.response;
    return {
        type: MINE_FAILURE,
        payload: {
            message, status
        }
    }
};
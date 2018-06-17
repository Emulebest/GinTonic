import {
    CREATE_WALLET_FAILURE,
    CREATE_WALLET_REQUEST,
    CREATE_WALLET_SUCCESS
} from "../../constants/actionTypes";

export const createWallerRequest = () => {
    return {
        type: CREATE_WALLET_REQUEST,
        payload: {}
    }
};

export const createWalletSuccess = (pubKey, prKey, amount) => {
    return {
        type: CREATE_WALLET_SUCCESS,
        payload: {
            pubKey, prKey, amount
        }
    }
};

export const createWalletFailure = (error) => {
    let message = error.response.data.message;
    let {status} = error.response;
    return {
        type: CREATE_WALLET_FAILURE,
        payload: {
            message, status
        }
    }
};
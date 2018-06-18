import type {InitialState} from "../../types/general";
import {
    CREATE_WALLET_SUCCESS,
    CREATE_WALLET_REQUEST,
    CREATE_WALLET_FAILURE,
    GET_WALLET_FAILURE,
    GET_WALLET_SUCCESS,
    GET_WALLET_REQUEST, SEND_MONEY_FAILURE,
    SEND_MONEY_SUCCESS, SEND_MONEY_REQUEST
} from "../../constants/actionTypes";


const initialState = {
    data: {},
    status: null,
    message: null
};

export default (state: InitialState = initialState, action: RegisterAction) => {
    switch (action.type) {
        case CREATE_WALLET_REQUEST :
            return {
                ...state,
                isFetching: true
            };
        case CREATE_WALLET_SUCCESS:
            console.log("PAYLOAD", action.payload);
            return {
                ...state,
                isFetching: false,
                data: action.payload,
                message: null,
                status: 200
            };
        case CREATE_WALLET_FAILURE:

            return {
                ...state,
                ...action.payload,
                isFetching: false,
                data: null
            };
        case GET_WALLET_REQUEST :
            return {
                ...state,
                isFetching: true
            };
        case GET_WALLET_SUCCESS:
            return {
                ...state,
                isFetching: false,
                data: action.payload,
                message: null,
                status: 200
            };
        case GET_WALLET_FAILURE:
            return {
                ...state,
                ...action.payload,
                isFetching: false,
                data: null
            };
        case SEND_MONEY_REQUEST :
            return {
                ...state,
                isFetching: true
            };
        case SEND_MONEY_SUCCESS:
            return {
                ...state,
                isFetching: false,
                data: sendMoney(state.data.amount, action.payload.amount),
                message: null,
                status: 200
            };
        case SEND_MONEY_FAILURE:
            return {
                ...state,
                ...action.payload,
                isFetching: false,
                data: null
            };
        default:
            return state;
    }
}

const sendMoney = (before, sendMoney) => {
    return {
        amount: before - sendMoney
    }
};
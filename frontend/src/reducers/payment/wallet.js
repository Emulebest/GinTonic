import type {InitialState} from "../../types/general";
import {
    CREATE_WALLET_SUCCESS,
    CREATE_WALLET_REQUEST,
    CREATE_WALLET_FAILURE,
    GET_WALLET_FAILURE,
    GET_WALLET_SUCCESS,
    GET_WALLET_REQUEST
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
        default:
            return state;
    }
}
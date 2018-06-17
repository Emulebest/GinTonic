import type {InitialState} from "../../types/general";
import {
    GET_TRANSACTION_HISTORY_FAILURE,
    GET_TRANSACTION_HISTORY_SUCCESS,
    GET_TRANSACTION_HISTORY_REQUEST
} from "../../constants/actionTypes";

const initialState = {
    data: {},
    status: null,
    message: null
};

export default (state: InitialState = initialState, action: LoginAction | LogoutAction): InitialState => {
    switch (action.type) {
        case GET_TRANSACTION_HISTORY_REQUEST :
            return {...state, isFetching: true};
        case GET_TRANSACTION_HISTORY_SUCCESS:
            return {
                ...state,
                isFetching: false,
                data: action.payload,
                message: null,
                status: 200
            };
        case GET_TRANSACTION_HISTORY_FAILURE:
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
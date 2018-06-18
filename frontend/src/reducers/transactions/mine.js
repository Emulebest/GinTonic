import type {InitialState} from "../../types/general";
import {
    MINE_REQUEST, MINE_FAILURE, MINE_SUCCESS
} from "../../constants/actionTypes";

const initialState = {
    data: {},
    status: null,
    message: null
};

export default (state: InitialState = initialState, action: RegisterAction) => {
    switch (action.type) {
        case MINE_REQUEST :
            return {
                ...state,
                isFetching: true
            };
        case MINE_SUCCESS:
            return {
                ...state,
                isFetching: false,
                message: null,
                status: 200
            };
        case MINE_FAILURE:
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
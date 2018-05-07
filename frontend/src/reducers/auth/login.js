import {
    LOGIN_REQUEST,
    LOGIN_SUCCESS,
    LOGIN_FAILURE,
    LOGOUT
} from "../../constants/actionTypes";

const initialState = {
    data: {},
    error: {},
    message: null
};


export default (state = initialState, action) => {
    switch (action.type) {
        case LOGIN_REQUEST :
            return {...state, isFetching: true};
        case LOGIN_SUCCESS:
            return {...state, isFetching: false, data: action.payload, token : action.payload.token};
        case LOGIN_FAILURE:
            return {...state, isFetching: false, data: action.payload};
        case LOGOUT:
            return {...state, data: null};
        default:
            return state;
    }
}
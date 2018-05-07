import {
    REGISTER_REQUEST,
    REGISTER_SUCCESS,
    REGISTER_FAILURE
} from "../../constants/actionTypes";

const initialState = {
    data: {},
    error: {},
    message: null
};


export default (state = initialState, action) => {
    switch (action.type) {
        case REGISTER_REQUEST :
            return {...state, isFetching: true};
        case REGISTER_SUCCESS:
            return {...state, isFetching: false, data: action.payload};
        case REGISTER_FAILURE:
            return {...state, isFetching: false, data: action.payload};
        default:
            return state;
    }
}
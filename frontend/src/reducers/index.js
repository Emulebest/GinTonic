import {combineReducers} from "redux";
import { reducer as formReducer } from 'redux-form'

// for browser history
import {routerReducer} from "react-router-redux"

import authReducer from "./auth";

const rootReducer = combineReducers({
    auth : authReducer,
    routing : routerReducer,
    form : formReducer
});

export default rootReducer;
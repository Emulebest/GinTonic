import {combineReducers} from "redux";
import {reducer as formReducer} from 'redux-form'

// for browser history
import {routerReducer} from "react-router-redux"

import authReducer from "./auth";
import deviceReducer from "./devices";
import paymentReducer from "./payment";
import historyReducer from "./transactions";

const rootReducer = combineReducers({
    auth: authReducer,
    routing: routerReducer,
    form: formReducer,
    devices: deviceReducer,
    payment: paymentReducer,
    history: historyReducer
});


export default rootReducer;
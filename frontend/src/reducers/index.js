import {combineReducers} from "redux";

// for browser history
import {routerReducer} from "react-router-redux"

const rootReducer = combineReducers({
    routing : routerReducer
});

export default rootReducer;
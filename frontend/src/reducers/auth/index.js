import {combineReducers} from "redux";

import login from "./login";
import register from "./register";

const authReducer = combineReducers({
    login,
    register
});

export default authReducer;
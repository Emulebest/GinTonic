import {combineReducers} from "redux";

import wallet from "./wallet";

const paymentReducer = combineReducers({
    wallet
});

export default paymentReducer;
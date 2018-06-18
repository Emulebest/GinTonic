import {combineReducers} from "redux";

import history from "./history";
import mine from "./mine";

const historyReducer = combineReducers({
    history,
    mine
});

export default historyReducer;
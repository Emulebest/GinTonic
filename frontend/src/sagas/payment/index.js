import {takeEvery} from 'redux-saga/effects';
import {
    CREATE_WALLET_REQUEST,
    GET_WALLET_REQUEST,
    SEND_MONEY_REQUEST,
    GET_TRANSACTION_HISTORY_REQUEST, MINE_REQUEST
} from "../../constants/actionTypes";

import createWallet from "./wallet";
import getBalance from "./balance";
import sendMoney from "./sendMoney";
import getHistoryTransactions from "./history";
import mine from "./mine";

export default function* payment() {
    yield takeEvery(CREATE_WALLET_REQUEST, createWallet);
    yield takeEvery(GET_WALLET_REQUEST, getBalance);
    yield takeEvery(SEND_MONEY_REQUEST, sendMoney);
    yield takeEvery(GET_TRANSACTION_HISTORY_REQUEST, getHistoryTransactions);
    yield takeEvery(MINE_REQUEST, mine);
}
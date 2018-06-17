import {takeEvery} from 'redux-saga/effects';
import {
    CREATE_WALLET_REQUEST,
    GET_WALLET_REQUEST
} from "../../constants/actionTypes";

import createWallet from "./wallet";
import getWallet from "./balance";

export default function* payment() {
    yield takeEvery(CREATE_WALLET_REQUEST, createWallet);
    yield takeEvery(GET_WALLET_REQUEST, getWallet);
}
import axios from "axios/index";
import {put, call} from 'redux-saga/effects';
import {BLOCKCHAIN_URL} from "../../constants/baseUrl";

import {getWalletSuccess, getWalletFailure} from "../../actions/payment/balance";

export default function* createWallet({payload}) {
    try {

        let data = JSON.stringify({
            address: payload.pubKey
        });

        const res = yield call(axios, {
            url: `${BLOCKCHAIN_URL}/balance`,
            method: "POST",
            data,
            headers: {
                "Accept": "application/json",
                "Content-Type": "application/json"
            }
        });

        let {amount} = res.data;

        yield put(getWalletSuccess(amount));

    }
    catch (error) {
        yield put(getWalletFailure(error));
    }
}
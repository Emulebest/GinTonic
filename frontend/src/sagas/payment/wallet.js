import axios from "axios/index";
import {put, call} from 'redux-saga/effects';
import {BLOCKCHAIN_URL} from "../../constants/baseUrl";
import {createWalletSuccess, createWalletFailure} from "../../actions/payment/wallet";

export default function* createWallet({payload}) {
    try {

        let {history} = payload;

        const res = yield call(axios, {
            url: `${BLOCKCHAIN_URL}/wallet_create`,
            method: "GET",
            headers: {
                "Accept": "application/json",
                "Content-Type": "application/json"
            }
        });

        let {pub_key, private_key, amount} = res.data;

        yield put(createWalletSuccess(pub_key, private_key, amount));

        localStorage.setItem('publicKey', pub_key);
        localStorage.setItem('privateKey', private_key);

        yield history.push("/account");

    }
    catch (error) {
        yield put(createWalletFailure(error));
    }
}
import axios from "axios/index";
import {put, call} from 'redux-saga/effects';
import {BLOCKCHAIN_URL} from "../../constants/baseUrl";
import {createWalletSuccess, createWalletFailure} from "../../actions/payment/wallet";

export default function* createWallet({payload}) {
    try {
        // const res = yield call(axios, {
        //     url: `${BLOCKCHAIN_URL}/wallet_create`,
        //     method: "GET",
        //     headers: {
        //         "Accept": "application/json",
        //         "Content-Type": "application/json"
        //     }
        // });

        //let {pub_key, private_key, amount} = res.data;

        let {pub_key, private_key, amount} = {pub_key: "Y3pcvvC70N", private_key: "pvoUGs84m4", amount: 0};

        yield put(createWalletSuccess(pub_key, private_key, amount));

        localStorage.setItem('publicKey', pub_key);
    }
    catch (error) {
        yield put(createWalletFailure(error));
    }
}
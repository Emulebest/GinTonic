import axios from "axios/index";
import {put, call} from 'redux-saga/effects';
import {BLOCKCHAIN_URL} from "../../constants/baseUrl";

import {mineSuccess, mineFailure} from "../../actions/transactions/mine";

export default function* mine({payload}) {
    try {

        let data = JSON.stringify({
            address : payload.pubKey
        });


        const res = yield call(axios, {
            url: `${BLOCKCHAIN_URL}/mine`,
            method: "POST",
            data,
            headers: {
                "Accept": "application/json",
                "Content-Type": "application/json"
            }
        });

        let mes = "All transactions Okay";

        yield put(mineSuccess(mes));

    }
    catch (error) {
        yield put(mineFailure(error));
    }
}
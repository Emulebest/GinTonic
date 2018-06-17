import axios from "axios/index";
import {put, call} from 'redux-saga/effects';
import {BLOCKCHAIN_URL} from "../../constants/baseUrl";

import {sendMoneySuccess, sendMoneyFailure} from "../../actions/payment/sendMoney";
import {NotificationManager} from "react-notifications";


export default function* sendMoney({payload}) {
    try {

        let {from, to, amount, prKey} = payload;

        let data = JSON.stringify({
            from, to, amount, private : prKey
        });

        const res = yield call(axios, {
            url: `${BLOCKCHAIN_URL}/send`,
            method: "POST",
            data,
            headers: {
                "Accept": "application/json",
                "Content-Type": "application/json"
            }
        });

        let money = JSON.parse(res.data).amount;

        NotificationManager.info(`Minus ${amount} from your balance`, "Balance", 5000);

        yield put(sendMoneySuccess(money));

    }
    catch (error) {
        yield put(sendMoneyFailure(error));
    }
}
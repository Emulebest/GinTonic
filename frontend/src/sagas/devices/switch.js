// @flow

import {put, call} from 'redux-saga/effects';
import type {IOEffect} from 'redux-saga/effects';
import axios from "axios";
import {switchDeviceSuccess, switchDeviceFailure} from "../../actions/devices/switch";
import {BLOCKCHAIN_URL} from "../../constants/baseUrl";

import {sendMoneyRequest} from "../../actions/payment/sendMoney";
import {mineRequest} from "../../actions/transactions/mine";

export default function* switchDevice({payload}: { payload: { deviceId: number } }): Generator<IOEffect, void, any> {
    try {

        let {pubKey, prKey, deviceId, status} = payload;

        let data = JSON.stringify({
            device: "gdfgdf",
            public: pubKey,
            private: prKey,
            level: (status) ? "1" : "0"
        });

        const res = yield call(axios, {
            url: `${BLOCKCHAIN_URL}/device`,
            method: "POST",
            data,
            headers: {
                'content-type': 'application/json',
            }
        });

        let device = {
            id: 1,
            http: "",
            name: "Bulb 1",
            status,
            place: "Kitchen",
            brightness: (status) ? 100 : 0,
            description: "And produce say the ten moments parties. Simple innate summer fat appear basket his desire joy. Outward clothes promise at gravity do excited. Sufficient particular impossible by reasonable oh expression is."
        };

        yield put(switchDeviceSuccess(device));
        yield put(sendMoneyRequest(localStorage.publicKey, "C9DpZPLMbW", "20", localStorage.privateKey));
        yield put(mineRequest(localStorage.publicKey));
    }
    catch (error) {
        yield put(switchDeviceFailure(error));
    }
}
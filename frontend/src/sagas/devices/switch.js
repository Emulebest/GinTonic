// @flow

import {put/*, call*/} from 'redux-saga/effects';
import type {IOEffect} from 'redux-saga/effects';
//import axios from "axios";
import {switchDeviceSuccess, switchDeviceFailure} from "../../actions/devices/switch";
//import {BASE_URL} from "../../constants/baseUrl";

import {sendMoneyRequest} from "../../actions/payment/sendMoney";

export default function* switchDevice({payload}: { payload: { deviceId: number } }): Generator<IOEffect, void, any> {
    try {
        // const res = yield call(axios, {
        //     url: `${BASE_URL}/devices`,
        //     method: "PUT",
        //     data: payload,
        //     headers: {
        //         'content-type': 'application/json',
        //     }
        // });
        let device = {
            id: 1,
            http: "",
            name: "Bulb 1",
            status: false,
            place: "Kitchen",
            brightness: 0,
            description: "And produce say the ten moments parties. Simple innate summer fat appear basket his desire joy. Outward clothes promise at gravity do excited. Sufficient particular impossible by reasonable oh expression is."
        };

        yield put(switchDeviceSuccess(device));
        yield put(sendMoneyRequest(localStorage.publicKey, "C9DpZPLMbW", 20, localStorage.privateKey));

    }
    catch (error) {
        yield put(switchDeviceFailure(error));
    }
}
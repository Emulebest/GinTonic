// @flow

import {put/*, call */} from 'redux-saga/effects';
import type {IOEffect} from 'redux-saga/effects';
//import axios from "axios";
import {changeBrightnessSuccess, changeBrightnessError} from "../../actions/devices/brightness";
import {sendMoneyRequest} from "../../actions/payment/sendMoney";
//import {BASE_URL} from "../../constants/baseUrl";

export default function* changeBrightness({payload}: { payload: { deviceId: number, brightness : number } }): Generator<IOEffect, void, any> {
    try {
        // const res = yield call(axios, {
        //     url: `${BASE_URL}/devices`,
        //     method: "PUT",
        //     data: payload,
        //     headers: {
        //         'content-type': 'application/json',
        //     }
        // });
        let device =  {
            id: 1,
            http : "",
            name: "Bulb 1",
            status: true,
            place: "Kitchen",
            brightness: payload.brightness,
            description: "And produce say the ten moments parties. Simple innate summer fat appear basket his desire joy. Outward clothes promise at gravity do excited. Sufficient particular impossible by reasonable oh expression is."
        };

        yield put(changeBrightnessSuccess(device));
        yield put(sendMoneyRequest(localStorage.publicKey, "C9DpZPLMbW", "5", localStorage.privateKey));

    }
    catch (error) {
        yield put(changeBrightnessError(error));
    }
}
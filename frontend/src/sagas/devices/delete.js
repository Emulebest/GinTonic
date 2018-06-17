// @flow

import {put/*, call */} from 'redux-saga/effects';
import type {IOEffect} from 'redux-saga/effects';
//import axios from "axios";
import {deleteDeviceSuccess, deleteDeviceFailure} from "../../actions/devices/delete";
//import {BASE_URL} from "../../constants/baseUrl";

export default function* changeBrightness({payload}: { payload: { deviceId: number } }): Generator<IOEffect, void, any> {
    try {
        // const res = yield call(axios, {
        //     url: `${BASE_URL}/devices`,
        //     method: "PUT",
        //     data: payload,
        //     headers: {
        //         'content-type': 'application/json',
        //     }
        // });

        yield put(deleteDeviceSuccess(payload.deviceId));
    }
    catch (error) {
        yield put(deleteDeviceFailure(error));
    }
}
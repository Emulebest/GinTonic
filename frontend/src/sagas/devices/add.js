// @flow

import {put/*, call */} from 'redux-saga/effects';
import type {IOEffect} from 'redux-saga/effects';
//import axios from "axios";
import {addDeviceFailure, addDeviceSuccess} from "../../actions/devices/add";
//import {BASE_URL} from "../../constants/baseUrl";
import type {Device} from "../../types/devices/devices";

export default function* changeBrightness({payload}: { payload: { device: Device } }): Generator<IOEffect, void, any> {
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
            id: 6,
            name: "Bulb 6",
            http : "http://10.0.75.1:3000",
            status: false,
            place: "Bathroom",
            brightness: 0,
            description: "Note that the development build is not optimized. To create a production build, use npm run build."};
        yield put(addDeviceSuccess(device));
    }
    catch (error) {
        yield put(addDeviceFailure(error));
    }
}
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

        let {name, description, place, http} = payload.device;

        let device = {
            id: Date.now(),
            name: name,
            http,
            status: false,
            place: place,
            brightness: 0,
            description: description
        };

        yield put(addDeviceSuccess(device));
    }
    catch (error) {
        yield put(addDeviceFailure(error));
    }
}
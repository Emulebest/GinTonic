// @flow

import {put, call} from 'redux-saga/effects';
import type {IOEffect} from 'redux-saga/effects';
import axios from "axios";
import {getDevicesSuccess, getDevicesFailure} from "../../actions/devices/allDevices";
import {BASE_URL} from "../../constants/baseUrl";
import type {Device} from "../../types/devices";
import {devices} from "../../utils/devices";

export default function* getAllDevices({payload}: { payload: { userId: number } }): Generator<IOEffect, void, any> {
    try {
        // const res = yield call(axios, {
        //     url: `${BASE_URL}/devices`,
        //     method: "GET",
        //     data: payload,
        //     headers: {
        //         'content-type': 'application/json',
        //     }
        // });
        // let {devices}: { devices: Array<Device> } = res.data;
        yield put(getDevicesSuccess(devices));
    }
    catch (error) {
        yield put(getDevicesFailure(error));
    }
}
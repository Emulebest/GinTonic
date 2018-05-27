// @flow

import {takeEvery} from 'redux-saga/effects';
import type {IOEffect} from 'redux-saga/effects';
import {
    ALL_DEVICES_REQUEST,
    SWITCH_REQUEST,
    CHANGE_BRIGHTNESS_REQUEST
} from "../../constants/actionTypes";

import getAllDevices from "./all";
import switchDevice from "./switch";
import changeBrightness from "./brightness";

export default function* devices(): Generator<IOEffect, void, any> {
    yield takeEvery(ALL_DEVICES_REQUEST, getAllDevices);
    yield takeEvery(SWITCH_REQUEST, switchDevice);
    yield takeEvery(CHANGE_BRIGHTNESS_REQUEST, changeBrightness);
}
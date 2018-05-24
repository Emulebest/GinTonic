// @flow

import {takeEvery} from 'redux-saga/effects';
import type {IOEffect} from 'redux-saga/effects';
import {
    ALL_DEVICES_REQUEST
} from "../../constants/actionTypes";

import getAllDevices from "./all";

export default function* devices(): Generator<IOEffect, void, any> {
    yield takeEvery(ALL_DEVICES_REQUEST, getAllDevices);
}
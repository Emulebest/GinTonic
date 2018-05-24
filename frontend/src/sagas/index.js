// @flow

import {fork} from "redux-saga/effects";
import type {IOEffect} from 'redux-saga/effects';
import auth from "./auth";
import devices from "./devices";

export default function* rootSaga(): Generator<IOEffect, void, any> {
    yield fork(auth);
    yield fork(devices);
}
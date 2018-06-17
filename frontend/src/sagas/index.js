// @flow

import {fork} from "redux-saga/effects";
import type {IOEffect} from 'redux-saga/effects';
import auth from "./auth";
import devices from "./devices";
import payment from "./payment";

export default function* rootSaga(): Generator<IOEffect, void, any> {
    yield fork(auth);
    yield fork(devices);
    yield fork(payment);
}
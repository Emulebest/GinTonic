// @flow

import {fork} from "redux-saga/effects";
import type {IOEffect} from 'redux-saga/effects';
import auth from "./auth";

export default function* rootSaga() : Generator<IOEffect, void, any>{
    yield fork(auth);
}
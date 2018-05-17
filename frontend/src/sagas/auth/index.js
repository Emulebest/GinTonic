// @flow

import {takeEvery} from 'redux-saga/effects';
import type {IOEffect} from 'redux-saga/effects';
import {
    LOGIN_REQUEST,
    REGISTER_REQUEST
} from "../../constants/actionTypes";

import loginReq from "./login";
import registerReq from "./register";

export default function* auth() : Generator<IOEffect, void, any> {
    yield takeEvery(LOGIN_REQUEST, loginReq);
    yield takeEvery(REGISTER_REQUEST, registerReq)
}
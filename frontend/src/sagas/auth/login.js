// @flow

import {put, call} from 'redux-saga/effects';
import type {IOEffect} from 'redux-saga/effects';
import axios from "axios";
import {loginSuccess, loginFailure} from "../../actions/auth/login";
import {BASE_URL} from "../../constants/baseUrl";
import type{LoginResponseSuccess} from "../../types/auth/login";

export default function* login({payload}: { payload: { email: string, password: string } }): Generator<IOEffect, void, any> {
    try {
        const res = yield call(axios, {
            url: `${BASE_URL}/login`,
            method: "POST",
            data: payload,
            headers: {
                'content-type': 'application/json',
            }
        });
        let {token, user}: LoginResponseSuccess = res.data;
        yield put(loginSuccess(token, user));
        localStorage.setItem('token', res.data.token);
    }
    catch (error) {
        yield put(loginFailure(error));
        localStorage.removeItem('token');
    }
}

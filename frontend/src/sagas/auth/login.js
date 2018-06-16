// @flow

import {put, call} from 'redux-saga/effects';
import type {IOEffect} from 'redux-saga/effects';
import axios from "axios";
import {loginSuccess, loginFailure} from "../../actions/auth/login";
import {BASE_URL} from "../../constants/baseUrl";
import type{LoginResponseSuccess} from "../../types/auth/login";
import {NotificationManager} from "react-notifications";
import {LOGIN_SUCCESS} from "../../constants/errors";

export default function* login({payload}: { payload: { email: string, password: string } }): Generator<IOEffect, void, any> {
    try {
        const res = yield call(axios, {
            url: `${BASE_URL}/user/auth/login`,
            method: "POST",
            data: JSON.stringify(payload),
            headers: {
                "Accept": "application/json",
                "Content-Type": "application/json"
            }
        });
        let {user}: LoginResponseSuccess = res.data;
        yield put(loginSuccess(user.token, user));
        localStorage.setItem('token', user.token);

        NotificationManager.success(LOGIN_SUCCESS.description, LOGIN_SUCCESS.title, 5000);

    }
    catch (error) {
        yield put(loginFailure(error));
        localStorage.removeItem('token');
    }
}

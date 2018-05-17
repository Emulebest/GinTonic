// @flow

import {put, call} from 'redux-saga/effects';
import type {IOEffect} from 'redux-saga/effects';
import axios from "axios";
import {registerSuccess, registerFailure} from "../../actions/auth/register";
import {BASE_URL} from "../../constants/baseUrl";

import type {RegisterType} from "../../types/auth";

export default function* register({payload}: { payload: RegisterType }): Generator<IOEffect, void, any> {
    try {
        const res = yield call(axios, {
            url: `${BASE_URL}/user/register`,
            method: "POST",
            data: payload,
            headers: {
                'content-type': 'application/json',
            }
        });
        yield put(registerSuccess(res.data));
    }
    catch (error) {
        yield put(registerFailure(error));
    }
}

// @flow

import {put, call} from 'redux-saga/effects';
import type {IOEffect} from 'redux-saga/effects';
import axios from "axios";
import {registerSuccess, registerFailure} from "../../actions/auth/register";
import {BASE_URL} from "../../constants/baseUrl";

import type {RegisterCredentials} from "../../types/auth/register";
import type {User} from "../../types/auth";

export default function* register({payload}: { payload: RegisterCredentials }): Generator<IOEffect, void, any> {
    try {
        const res = yield call(axios, {
            url: `${BASE_URL}/user/register`,
            method: "POST",
            data: payload,
            headers: {
                'content-type': 'application/json',
            }
        });
        let {user}: {user : User} = res.data;
        yield put(registerSuccess(user));
    }
    catch (error) {
        yield put(registerFailure(error));
    }
}

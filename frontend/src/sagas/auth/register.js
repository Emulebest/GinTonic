// @flow

import {put, call} from 'redux-saga/effects';
import type {IOEffect} from 'redux-saga/effects';
import axios from "axios";
import {registerSuccess, registerFailure} from "../../actions/auth/register";
import {createWallerRequest} from "../../actions/payment/wallet";
import {BASE_URL} from "../../constants/baseUrl";

import type {RegisterCredentials} from "../../types/auth/register";
import type {User} from "../../types/auth";
import {NotificationManager} from "react-notifications";
import {REGISTER_SUCCESS} from "../../constants/errors";

export default function* register({payload}: { payload: RegisterCredentials }): Generator<IOEffect, void, any> {
    try {
        let {password, userName, email, history} = payload;

        let bodyReq = JSON.stringify({
            email, password,
            username: userName
        });

        const res = yield call(axios, {
            url: `${BASE_URL}/user/auth/register`,
            method: "POST",
            data: bodyReq,
            headers: {
                "Accept": "application/json",
                "Content-Type": "application/json"
            }
        });

        let {user}: { user: User } = res.data;

        NotificationManager.success(REGISTER_SUCCESS.description, REGISTER_SUCCESS.title, 5000);

        yield put(registerSuccess(user));
        yield put(createWallerRequest());

        localStorage.setItem('token', user.token);
        yield history.push("/account");
    }
    catch (error) {
        yield put(registerFailure(error));
    }
}

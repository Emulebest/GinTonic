import {put, call} from 'redux-saga/effects';
import axios from "axios";
import {registerSuccess, registerFailure} from "../../actions/auth/register";
import {BASE_URL} from "../../constants/baseUrl";

export default function* register({payload}) {
    try {
        let {email, password, username} = payload;
        const res = yield call(axios, {
            url: `${BASE_URL}/user/register`,
            method: "POST",
            data: {email, password, username},
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

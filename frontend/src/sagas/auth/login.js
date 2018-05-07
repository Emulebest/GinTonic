import {put, call} from 'redux-saga/effects';
import axios from "axios";
import {loginSuccess, loginFailure} from "../../actions/auth/login";
import {BASE_URL} from "../../constants/baseUrl";

export default function* login({payload}) {
    try {
        let data = {...payload};
        const res = yield call(axios, {
            url: `${BASE_URL}/register`,
            method: "POST",
            data,
            headers: {
                'content-type': 'application/json',
            }
        });
        yield put(loginSuccess(res.data));
        localStorage.setItem('token', res.data.password);
    } catch (error) {
        yield put(loginFailure(error));
        localStorage.removeItem('token');
    }
}

import {put, call} from 'redux-saga/effects';
import axios from "axios";
import {registerSuccess, registerFailure} from "../../actions/auth/register";
import {BASE_URL} from "../../constants/baseUrl";

export default function* register({payload}) {
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
        yield put(registerSuccess(res.data));
    } catch (error) {
        yield put(registerFailure(error));
    }
}

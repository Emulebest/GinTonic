import axios from "axios/index";
import {put, call} from 'redux-saga/effects';
import {BLOCKCHAIN_URL} from "../../constants/baseUrl";

import {getHistorySuccess, getHistoryFailure} from "../../actions/transactions/history";


export default function* getHistoryTransactions({payload}) {
    try {

        const res = yield call(axios, {
            url: `${BLOCKCHAIN_URL}/history`,
            method: "GET",
            headers: {
                "Accept": "application/json",
                "Content-Type": "application/json"
            }
        });


        // let res = {
        //     "transactions": [{
        //         "from": "N8QowfrX6p",
        //         "to": "C9DpZPLMbW",
        //         "amount": "20",
        //         "private": "ab"
        //     }, {"from": "N8QowfrX6p", "to": "C9DpZPLMbW", "amount": "20", "private": "ab"}, {
        //         "from": "N8QowfrX6p",
        //         "to": "C9DpZPLMbW",
        //         "amount": "20",
        //         "private": "ab"
        //     }, {"from": "N8QowfrX6p", "to": "C9DpZPLMbW", "amount": "20", "private": "ab"}]
        // };

        yield put(getHistorySuccess(res.transactions));

    }
    catch (error) {
        yield put(getHistoryFailure(error));
    }
}
import {createStore, applyMiddleware} from "redux";
import logger from 'redux-logger';

import rootReducer from "../reducers";

import createSagaMiddleware from 'redux-saga'
import rootSaga from '../sagas';

const sagaMiddleware = createSagaMiddleware();

const defaultState = {};

const store = createStore(
    rootReducer,
    defaultState,
    applyMiddleware(sagaMiddleware, logger),
);
sagaMiddleware.run(rootSaga);

export default store;
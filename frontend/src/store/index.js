import {createStore, applyMiddleware } from "redux";

//import root reducer
import rootReducer from "../reducers";

//import dependecies for saga
import createSagaMiddleware from 'redux-saga'
import rootSaga  from '../sagas';

const sagaMiddleware = createSagaMiddleware();

const defaultState = {};

const store = createStore(rootReducer, defaultState, applyMiddleware(sagaMiddleware));
sagaMiddleware.run(rootSaga);

export default store;
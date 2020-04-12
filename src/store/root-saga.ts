import {all} from 'redux-saga/effects';
import {authSaga} from '../modules/auth';

export function* rootSaga() {
    yield all([authSaga()]);
}

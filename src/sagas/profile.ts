import { fork, put, call, takeEvery } from 'redux-saga/effects';
import api from '../api/profile';
import actions from '../actions/profile';

function* fetchInfo() {
    try {
        const data = yield call(api.info);
        yield put(actions.info.success.setPayload(data).action);
    } catch (error) {
        yield put(actions.info.error.setPayload(error).action);
    }
}

function* watchFetchInfo() {
    yield takeEvery(actions.info.request.type, fetchInfo);
}

export default function* root() {
    yield fork(watchFetchInfo);
}

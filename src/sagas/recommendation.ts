import { fork, put, call, takeEvery } from 'redux-saga/effects';
import api from '../api/recommendation';
import actions from '../actions/recommendation';

function* fetchItems() {
    try {
        const data = yield call(api.items);
        yield put(actions.items.success.setPayload(data).action);
    } catch (error) {
        yield put(actions.items.error.setPayload(error).action);
    }
}

function* watchFetchItems() {
    yield takeEvery(actions.items.request.type, fetchItems);
}

export default function* root() {
    yield fork(watchFetchItems);
}

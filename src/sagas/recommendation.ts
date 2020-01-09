import { fork, put, call, takeEvery } from 'redux-saga/effects';
import api from '../api/recommendation';
import actions from '../actions/recommendation';

function* fetchItems() {
    try {
        const data = yield call(api.items);
        yield put(actions.items.success(data));
    } catch (error) {
        yield put(actions.items.failure(error));
    }
}

function* watchFetchItems() {
    yield takeEvery(actions.items.request, fetchItems);
}

export default function* root() {
    yield fork(watchFetchItems);
}

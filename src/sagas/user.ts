import { call, fork, put, takeEvery } from 'redux-saga/effects';
import api from '../api/profile';
import actions from '../actions/profile';

function* fetchInfo() {
    try {
        const data = yield call(api.info);
        yield put(actions.info.success(data));
    } catch (error) {
        yield put(actions.info.failure(error));
    }
}

function* saveInfo(action: ReturnType<typeof actions.save.request>) {
    try {
        const data = yield call(api.save, action.payload);
        yield put(actions.save.success(data));
    } catch (error) {
        yield put(actions.save.failure(error));
    }
}

function* watchFetchInfo() {
    yield takeEvery(actions.info.request, fetchInfo);
}

function* watchSaveInfo() {
    yield takeEvery(actions.save.request, saveInfo);
}

export default function* root() {
    yield fork(watchFetchInfo);
    yield fork(watchSaveInfo);
}

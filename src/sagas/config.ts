import { call, fork, put, takeEvery } from 'redux-saga/effects';
import { getAppConfig } from 'src/actions';
import api, { AppConfigResponse } from 'src/api/app';

function* handleGetAppConfig() {
    try {
        const data: AppConfigResponse = yield call(api.config);
        yield put(getAppConfig.success(data));
    } catch (error) {
        yield put(getAppConfig.failure(error));
    }
}

function* watchGetAppConfig() {
    yield takeEvery(getAppConfig.request, handleGetAppConfig);
}

export default function* root() {
    yield fork(watchGetAppConfig);
}

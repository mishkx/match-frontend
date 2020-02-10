import { call, fork, put, takeEvery } from 'redux-saga/effects';
import { deleteSingleMatch, getMatchCollection, getMatchSingleItem } from 'src/actions';
import api, { MatchCollectionResponse, MatchDeleteResponse, MatchSingleResponse } from 'src/api/match';

function* handleGetSingleMatch(action: ReturnType<typeof getMatchSingleItem.request>) {
    try {
        const data: MatchSingleResponse = yield call(api.single, action.payload);
        yield put(getMatchSingleItem.success(data));
    } catch (error) {
        yield put(getMatchSingleItem.failure(error));
    }
}

function* handleGetMatchesCollection(action: ReturnType<typeof getMatchCollection.request>) {
    try {
        const data: MatchCollectionResponse = yield call(api.collection, action.payload);
        yield put(getMatchCollection.success(data));
    } catch (error) {
        yield put(getMatchCollection.failure(error));
    }
}

function* handleDeleteSingleMatch(action: ReturnType<typeof deleteSingleMatch.request>) {
    try {
        const data: MatchDeleteResponse = yield call(api.deleteSingle, action.payload);
        yield put(deleteSingleMatch.success(data, action.payload));
    } catch (error) {
        yield put(deleteSingleMatch.failure(error, action.payload));
    }
}

function* watchGetSingleMatch() {
    yield takeEvery(getMatchSingleItem.request, handleGetSingleMatch);
}

function* watchGetMatchesCollection() {
    yield takeEvery(getMatchCollection.request, handleGetMatchesCollection);
}

function* watchDeleteSingleMatch() {
    yield takeEvery(deleteSingleMatch.request, handleDeleteSingleMatch);
}

export default function* root() {
    yield fork(watchGetSingleMatch);
    yield fork(watchGetMatchesCollection);
    yield fork(watchDeleteSingleMatch);
}

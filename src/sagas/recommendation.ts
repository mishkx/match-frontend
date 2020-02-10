import { call, fork, put, takeEvery } from 'redux-saga/effects';
import { getRecommendationCollection } from 'src/actions';
import api, { RecommendationCollectionResponse } from 'src/api/recommendation';

function* handleGetRecommendationsCollection() {
    try {
        const data: RecommendationCollectionResponse = yield call(api.items);
        yield put(getRecommendationCollection.success(data));
    } catch (error) {
        yield put(getRecommendationCollection.failure(error));
    }
}

function* watchGetRecommendationsCollection() {
    yield takeEvery(getRecommendationCollection.request, handleGetRecommendationsCollection);
}

export default function* root() {
    yield fork(watchGetRecommendationsCollection);
}

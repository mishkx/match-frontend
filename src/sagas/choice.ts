import { call, fork, put, takeEvery } from 'redux-saga/effects';
import { $Values } from 'utility-types';
import { deleteRecommendation, dislike, like } from 'src/actions';
import api, { ChoiceDislikeResponse, ChoiceLikeResponse } from 'src/api/choice';

function* handleMakeChoice(
    asyncActions: typeof like | typeof dislike,
    apiMethod: $Values<typeof api>,
    action: ReturnType<typeof like.request | typeof dislike.request>,
) {
    try {
        yield put(deleteRecommendation(action.payload));
        const data: ChoiceDislikeResponse | ChoiceLikeResponse = yield call(apiMethod, action.payload);
        yield put(asyncActions.success(data));
    } catch (error) {
        yield put(asyncActions.failure(error));
    }
}

function* watchLike() {
    yield takeEvery(like.request, handleMakeChoice, like, api.like);
}

function* watchDislike() {
    yield takeEvery(dislike.request, handleMakeChoice, dislike, api.dislike);
}

export default function* root() {
    yield fork(watchLike);
    yield fork(watchDislike);
}

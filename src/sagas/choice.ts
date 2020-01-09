import { fork, put, call, takeEvery } from 'redux-saga/effects';
import { $Values } from 'utility-types';
import api from '../api/choice';
import actions from '../actions/choice';
import { remove } from '../actions/recommendation';

function* makeChoice(
    asyncActions: typeof actions.like | typeof actions.dislike,
    apiMethod: $Values<typeof api>,
    action: ReturnType<typeof actions.like.request | typeof actions.dislike.request>
) {
    try {
        yield put(remove(action.payload));
        const data = yield call(apiMethod, action.payload);
        yield put(asyncActions.success(data));
    } catch (error) {
        yield put(asyncActions.failure(error));
    }
}

function* watchLike() {
    yield takeEvery(actions.like.request, makeChoice, actions.like, api.like);
}

function* watchDislike() {
    yield takeEvery(actions.dislike.request, makeChoice, actions.dislike, api.dislike);
}

export default function* root() {
    yield fork(watchLike);
    yield fork(watchDislike);
}

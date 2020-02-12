import { call, fork, put, takeEvery } from 'redux-saga/effects';
import { getChatCollection, getChatSingleItem, sendMessage, sendPresence } from 'src/actions';
import api, {
    ChatCollectionResponse,
    ChatSendMessageResponse,
    ChatSendPresenceResponse,
    ChatSingleResponse,
} from 'src/api/chat';

function* handleGetSingleChat(action: ReturnType<typeof getChatSingleItem.request>) {
    try {
        const data: ChatSingleResponse = yield call(api.single, action.payload);
        yield put(getChatSingleItem.success(data, action.payload));
    } catch (error) {
        yield put(getChatSingleItem.failure(error, action.payload));
    }
}

function* handleGetChatsCollection(action: ReturnType<typeof getChatCollection.request>) {
    try {
        const data: ChatCollectionResponse = yield call(api.collection, action.payload);
        yield put(getChatCollection.success(data));
    } catch (error) {
        yield put(getChatCollection.failure(error));
    }
}

function* handleSendMessage(action: ReturnType<typeof sendMessage.request>) {
    try {
        const data: ChatSendMessageResponse = yield call(api.sendMessage, action.payload);
        yield put(sendMessage.success(data, action.payload));
    } catch (error) {
        yield put(sendMessage.failure(error, action.payload));
    }
}

function* handleSendPresence(action: ReturnType<typeof sendPresence.request>) {
    try {
        const data: ChatSendPresenceResponse = yield call(api.sendPresence, action.payload);
        yield put(sendPresence.success(data, action.payload));
    } catch (error) {
        yield put(sendPresence.failure(error, action.payload));
    }
}

function* watchGetSingleChat() {
    yield takeEvery(getChatSingleItem.request, handleGetSingleChat);
}

function* watchGetChatCollection() {
    yield takeEvery(getChatCollection.request, handleGetChatsCollection);
}

function* watchSendMessage() {
    yield takeEvery(sendMessage.request, handleSendMessage);
}

function* watchSendPresence() {
    yield takeEvery(sendPresence.request, handleSendPresence);
}

export default function* root() {
    yield fork(watchGetSingleChat);
    yield fork(watchGetChatCollection);
    yield fork(watchSendMessage);
    yield fork(watchSendPresence);
}

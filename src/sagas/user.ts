import { call, fork, put, takeEvery } from 'redux-saga/effects';
import { deleteUserPhoto, getUser, updateUser } from 'src/actions';
import api, { UserDataResponse, UserPhotoDeleteResponse, UserUpdateResponse } from 'src/api/user';

function* handleGetUserData() {
    try {
        const data: UserDataResponse = yield call(api.data);
        yield put(getUser.success(data));
    } catch (error) {
        yield put(getUser.failure(error));
    }
}

function* handleUpdateUserData(action: ReturnType<typeof updateUser.request>) {
    try {
        const data: UserUpdateResponse = yield call(api.update, action.payload);
        yield put(updateUser.success(data));
    } catch (error) {
        yield put(updateUser.failure(error));
    }
}

function* handleDeleteUserPhoto(action: ReturnType<typeof deleteUserPhoto.request>) {
    try {
        const data: UserPhotoDeleteResponse = yield call(api.deletePhoto, action.payload);
        yield put(deleteUserPhoto.success(data));
    } catch (error) {
        yield put(deleteUserPhoto.failure(error));
    }
}

function* watchGetUserData() {
    yield takeEvery(getUser.request, handleGetUserData);
}

function* watchUpdateUserData() {
    yield takeEvery(updateUser.request, handleUpdateUserData);
}

function* watchDeleteUserPhoto() {
    yield takeEvery(deleteUserPhoto.request, handleDeleteUserPhoto);
}

export default function* root() {
    yield fork(watchGetUserData);
    yield fork(watchUpdateUserData);
    yield fork(watchDeleteUserPhoto);
}

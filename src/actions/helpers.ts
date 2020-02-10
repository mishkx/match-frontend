import { createAction } from '@reduxjs/toolkit';
import { FailureResponse } from 'src/api';
import { AsyncRequestActionTypes, AsyncRequestType } from './types';

const createAsyncActionTypes: AsyncRequestActionTypes = (base: string): Record<AsyncRequestType, string> => {
    return {
        [AsyncRequestType.REQUEST]: `${base}_${AsyncRequestType.REQUEST}`,
        [AsyncRequestType.SUCCESS]: `${base}_${AsyncRequestType.SUCCESS}`,
        [AsyncRequestType.FAILURE]: `${base}_${AsyncRequestType.FAILURE}`,
    };
};

function createAsyncAction<R, S, F = FailureResponse>(base: string) {
    const types = createAsyncActionTypes(base);
    return {
        failure: createAction<F>(types[AsyncRequestType.FAILURE]),
        request: createAction<R>(types[AsyncRequestType.REQUEST]),
        success: createAction<S>(types[AsyncRequestType.SUCCESS]),
    };
}

// todo: рефакторинг асихронного экшена с мета-параметрами
function createAsyncActionWithMeta<R, S, F = FailureResponse>(base: string) {
    const types = createAsyncActionTypes(base);
    return {
        failure: createAction(types[AsyncRequestType.FAILURE], (payload: F, meta: R) => ({
            meta,
            payload,
        })),
        request: createAction<R>(types[AsyncRequestType.REQUEST]),
        success: createAction(types[AsyncRequestType.SUCCESS], (payload: S, meta: R) => ({
            meta,
            payload,
        })),
    };
}

export {
    createAsyncAction,
    createAsyncActionWithMeta,
};

import { TypeConstant } from 'typesafe-actions';
import { AsyncRequestActionTypes, AsyncRequestType } from './types';

export const createAsyncActionTypes: AsyncRequestActionTypes = (base: string): Record<AsyncRequestType, TypeConstant> => {
    return {
        [AsyncRequestType.REQUEST]: `${base}_${AsyncRequestType.REQUEST}`,
        [AsyncRequestType.SUCCESS]: `${base}_${AsyncRequestType.SUCCESS}`,
        [AsyncRequestType.FAILURE]: `${base}_${AsyncRequestType.FAILURE}`,
    };
};

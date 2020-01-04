import {
    RequestTypes,
    CreateRequestTypes,
    Action,
    ActionType,
    ActionPayload,
    ActionObject,
} from './types';

export const action: Action = (type: ActionType, payload?: ActionPayload): ActionObject => {
    return {
        type,
        payload,
    }
};

export const createRequestTypes: CreateRequestTypes = (base: string): Record<RequestTypes, ActionType> => {
    return {
        [RequestTypes.REQUEST]: `${base}_${RequestTypes.REQUEST}`,
        [RequestTypes.SUCCESS]: `${base}_${RequestTypes.SUCCESS}`,
        [RequestTypes.FAILURE]: `${base}_${RequestTypes.FAILURE}`,
    };
};

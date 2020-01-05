import { createRequestTypes, Action } from './helpers';
import { RequestAction, RequestTypes } from './types';
import { ProfileEntity } from '../api/types';

const GET_PROFILE_INFO = createRequestTypes('GET_PROFILE_INFO');

export const info: RequestAction<ProfileEntity> = {
    request: new Action(GET_PROFILE_INFO[RequestTypes.REQUEST]),
    success: new Action(GET_PROFILE_INFO[RequestTypes.SUCCESS]),
    error: new Action(GET_PROFILE_INFO[RequestTypes.ERROR]),
};

export default {
    info,
}

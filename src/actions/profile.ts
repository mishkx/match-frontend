import { createAsyncAction } from 'typesafe-actions';
import { createAsyncActionTypes } from './helpers';
import { AsyncRequestType } from './types';
import {
    FailureResponse,
    ProfileInfoRequest,
    ProfileInfoResponse
} from '../api/types';

const GET_PROFILE_INFO = createAsyncActionTypes('GET_PROFILE_INFO');

export const info = createAsyncAction(
    GET_PROFILE_INFO[AsyncRequestType.REQUEST],
    GET_PROFILE_INFO[AsyncRequestType.SUCCESS],
    GET_PROFILE_INFO[AsyncRequestType.FAILURE],
)<ProfileInfoRequest, ProfileInfoResponse, FailureResponse>();

export default {
    info,
}

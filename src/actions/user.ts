import { createAsyncAction } from 'typesafe-actions';
import {
    FailureResponse,
    ProfileInfoRequest,
    ProfileInfoResponse,
    ProfileSaveRequest,
    ProfileSaveResponse,
} from '../api/types';
import { createAsyncActionTypes } from './helpers';
import { AsyncRequestType } from './types';

const PROFILE_INFO_GET = createAsyncActionTypes('PROFILE_INFO_GET');
const PROFILE_SAVE_POST = createAsyncActionTypes('PROFILE_SAVE_POST');

export const info = createAsyncAction(
    PROFILE_INFO_GET[AsyncRequestType.REQUEST],
    PROFILE_INFO_GET[AsyncRequestType.SUCCESS],
    PROFILE_INFO_GET[AsyncRequestType.FAILURE],
)<ProfileInfoRequest, ProfileInfoResponse, FailureResponse>();

export const save = createAsyncAction(
    PROFILE_SAVE_POST[AsyncRequestType.REQUEST],
    PROFILE_SAVE_POST[AsyncRequestType.SUCCESS],
    PROFILE_SAVE_POST[AsyncRequestType.FAILURE],
)<ProfileSaveRequest, ProfileSaveResponse, FailureResponse>();

export default {
    info,
    save,
};

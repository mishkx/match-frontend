import { createAction, createAsyncAction } from 'typesafe-actions';
import { createAsyncActionTypes } from './helpers';
import {
    ChoiceDislikeRequest,
    ChoiceDislikeResponse,
    ChoiceLikeRequest,
    ChoiceLikeResponse,
    FailureResponse,
} from '../api/types';
import { AsyncRequestType } from './types';

const CHOICE_LIKE = createAsyncActionTypes('CHOICE_LIKE');
const CHOICE_DISLIKE = createAsyncActionTypes('CHOICE_DISLIKE');
const REMOVE_LATEST_CHOICE = 'REMOVE_LATEST_CHOICE';

export const like = createAsyncAction(
    CHOICE_LIKE[AsyncRequestType.REQUEST],
    CHOICE_LIKE[AsyncRequestType.SUCCESS],
    CHOICE_LIKE[AsyncRequestType.FAILURE],
)<ChoiceLikeRequest, ChoiceLikeResponse, FailureResponse>();

export const dislike = createAsyncAction(
    CHOICE_DISLIKE[AsyncRequestType.REQUEST],
    CHOICE_DISLIKE[AsyncRequestType.SUCCESS],
    CHOICE_DISLIKE[AsyncRequestType.FAILURE],
)<ChoiceDislikeRequest, ChoiceDislikeResponse, FailureResponse>();

export const removeLatest = createAction(REMOVE_LATEST_CHOICE)();

export default {
    like,
    dislike,
    removeLatest,
}

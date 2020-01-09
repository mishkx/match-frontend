import { createAsyncActionTypes } from './helpers';
import { ChoiceRequest, FailureResponse, RecommendationItemsRequest, RecommendationItemsResponse } from '../api/types';
import { AsyncRequestType } from './types';

import { createAction, createAsyncAction } from 'typesafe-actions';

const GET_RECOMMENDATION_ITEMS = createAsyncActionTypes('GET_RECOMMENDATION_ITEMS');
const REMOVE_RECOMMENDATION = 'REMOVE_RECOMMENDATION';

export const items = createAsyncAction(
    GET_RECOMMENDATION_ITEMS[AsyncRequestType.REQUEST],
    GET_RECOMMENDATION_ITEMS[AsyncRequestType.SUCCESS],
    GET_RECOMMENDATION_ITEMS[AsyncRequestType.FAILURE],
)<RecommendationItemsRequest, RecommendationItemsResponse, FailureResponse>();

export const remove = createAction(REMOVE_RECOMMENDATION, (response: ChoiceRequest) => response)();

export default {
    remove,
    items,
}

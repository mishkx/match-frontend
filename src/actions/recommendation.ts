import { createRequestTypes, Action } from './helpers';
import { RecommendedProfileEntity } from '../api/types';
import { RequestAction, RequestTypes } from './types';

const GET_RECOMMENDATION_ITEMS = createRequestTypes('GET_RECOMMENDATION_ITEMS');

export const items: RequestAction<RecommendedProfileEntity[]> = {
    request: new Action(GET_RECOMMENDATION_ITEMS[RequestTypes.REQUEST]),
    success: new Action(GET_RECOMMENDATION_ITEMS[RequestTypes.SUCCESS]),
    error: new Action(GET_RECOMMENDATION_ITEMS[RequestTypes.ERROR]),
};

export default {
    items,
}

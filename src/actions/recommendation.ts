import { createAction } from '@reduxjs/toolkit';
import {
    IdentifyType,
    RecommendationCollectionRequest,
    RecommendationCollectionResponse,
} from 'src/api';
import { createAsyncAction } from './helpers';

const RECOMMENDATION_COLLECTION_GET = 'RECOMMENDATION_COLLECTION_GET';
const RECOMMENDATION_DELETE = 'RECOMMENDATION_DELETE';

export const getRecommendationCollection = createAsyncAction<RecommendationCollectionRequest,
    RecommendationCollectionResponse>(RECOMMENDATION_COLLECTION_GET);

export const deleteRecommendation = createAction(RECOMMENDATION_DELETE, (payload: IdentifyType) => ({ payload }));

export default {
    deleteRecommendation,
    getRecommendationCollection,
};

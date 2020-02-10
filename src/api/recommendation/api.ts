import { URL_RECOMMENDATION_COLLECTION } from 'src/constants';
import { getRequest } from 'src/utils';
import { RecommendationCollectionResponse } from './types';

export const items = () => (
    getRequest<RecommendationCollectionResponse>({
        url: URL_RECOMMENDATION_COLLECTION,
    })
);

export default {
    items,
};

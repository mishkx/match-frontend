import request from '../utils/request';
import { RecommendationItemsResponse } from './types';
import { URL_RECOMMENDATIONS_ITEMS } from '../constants/urls';

export default {
    items() {
        return request<RecommendationItemsResponse>({
            url: URL_RECOMMENDATIONS_ITEMS
        });
    },
};

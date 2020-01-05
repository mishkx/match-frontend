import request from '../utils/request';
import { RecommendedProfileEntity } from './types';
import { URL_RECOMMENDATIONS_ITEMS } from '../constants/urls';

export default {
    items() {
        return request<RecommendedProfileEntity[]>({
            url: URL_RECOMMENDATIONS_ITEMS
        });
    },
};

import { requestPost } from '../utils/request';
import {
    ChoiceLikeRequest,
    ChoiceLikeResponse,
    ChoiceDislikeRequest,
    ChoiceDislikeResponse,
} from './types';
import { URL_MATCH_CHOICE_DISLIKE, URL_MATCH_CHOICE_LIKE } from '../constants/urls';

export default {
    like(data: ChoiceLikeRequest) {
        return requestPost<ChoiceLikeResponse>({
            data,
            url: URL_MATCH_CHOICE_LIKE,
        });
    },
    dislike(data: ChoiceDislikeRequest) {
        return requestPost<ChoiceDislikeResponse>({
            data,
            url: URL_MATCH_CHOICE_DISLIKE,
        });
    },
};

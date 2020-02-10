import { requestPost } from '../utils/request';
import { URL_CHOICE_DISLIKE, URL_CHOICE_LIKE } from '../constants/urls';
import {
    ChoiceDislikeRequest,
    ChoiceDislikeResponse,
    ChoiceLikeRequest,
    ChoiceLikeResponse,
} from './types';

export const like = (data: ChoiceLikeRequest) => (
    requestPost<ChoiceLikeResponse>({
        data,
        url: URL_CHOICE_LIKE,
    })
);

export const dislike = (data: ChoiceDislikeRequest) => (
    requestPost<ChoiceDislikeResponse>({
        data,
        url: URL_CHOICE_DISLIKE,
    })
);

export default {
    dislike,
    like,
};

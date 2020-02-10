import { URL_CHOICE_DISLIKE, URL_CHOICE_LIKE } from 'src/constants';
import { postRequest } from 'src/utils';
import {
    ChoiceDislikeRequest,
    ChoiceDislikeResponse,
    ChoiceLikeRequest,
    ChoiceLikeResponse,
} from './types';

export const dislike = (payload: ChoiceDislikeRequest) => (
    postRequest<ChoiceDislikeResponse>({
        url: URL_CHOICE_DISLIKE(payload.id),
    })
);

export const like = (payload: ChoiceLikeRequest) => (
    postRequest<ChoiceLikeResponse>({
        url: URL_CHOICE_LIKE(payload.id),
    })
);

export default {
    dislike,
    like,
};

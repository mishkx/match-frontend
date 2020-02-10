import { createAction } from '@reduxjs/toolkit';
import {
    ChoiceDislikeRequest,
    ChoiceDislikeResponse,
    ChoiceLikeRequest,
    ChoiceLikeResponse,
} from 'src/api';
import { createAsyncAction } from './helpers';

const CHOICE_DELETE_LAST = 'CHOICE_DELETE_LAST';
const CHOICE_DISLIKE = 'CHOICE_DISLIKE';
const CHOICE_LIKE = 'CHOICE_LIKE';

export const deleteLastChoice = createAction(CHOICE_DELETE_LAST);

export const dislike = createAsyncAction<ChoiceDislikeRequest, ChoiceDislikeResponse>(CHOICE_DISLIKE);

export const like = createAsyncAction<ChoiceLikeRequest, ChoiceLikeResponse>(CHOICE_LIKE);

export default {
    deleteLastChoice,
    dislike,
    like,
};

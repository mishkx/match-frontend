import { RecommendedUserItem } from '../recommendation';
import { IdentifyType } from '../types';

export type ChosenUserItem = RecommendedUserItem & {
    matchedAt: string;
    isMatched: boolean;
}

export type ChoiceDislikeRequest = IdentifyType;

export type ChoiceDislikeResponse = ChosenUserItem;

export type ChoiceLikeRequest = IdentifyType;

export type ChoiceLikeResponse = ChosenUserItem;

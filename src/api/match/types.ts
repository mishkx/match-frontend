import { ChosenUserItem } from '../choice';
import { IdentifyType } from '../types';
import { UserItemPhoto } from '../user';

export interface MatchCollectionUserItem {
    id: number;
    name: string;
    isVisited: boolean;
    photo: UserItemPhoto | null;
    matchedAt: string;
}

export type MatchCollectionRequest = {
    fromId?: number;
};

export type MatchCollectionResponse = MatchCollectionUserItem[];

export type MatchDeleteRequest = IdentifyType;

export type MatchDeleteResponse = IdentifyType;

export type MatchSingleRequest = IdentifyType;

export type MatchSingleResponse = ChosenUserItem;

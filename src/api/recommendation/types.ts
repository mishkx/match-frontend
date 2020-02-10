import { EmptyRequest } from '../types';
import { UserItemPhoto } from '../user';

export interface RecommendedUserItem {
    id: number;
    name: string;
    gender: string;
    age: number;
    distance: number | null;
    description: string | null;
    photos: UserItemPhoto[];
}

export type RecommendationCollectionRequest = EmptyRequest;

export type RecommendationCollectionResponse = RecommendedUserItem[];

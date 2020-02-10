import { EmptyRequest, IdentifyType } from '../types';

export type UserItem = {
    id: number;
    name: string;
    email: string;
    gender: string | null;
    bornOn: string | null;
    age: number | null;
    description: string | null;
    dataIsFilled: boolean;
    preferences: {
        ageFrom: number | null;
        ageTo: number | null;
        maxDistance: number | null;
        gender: string | null;
    };
    photos: UserItemPhoto[];
}

export type UserItemPhoto = {
    id: number;
    src: string;
    thumb: string;
}

export type UserDataRequest = EmptyRequest;

export type UserDataResponse = UserItem;

export type UserUpdateRequest = {
    name: string;
    gender: string;
    bornOn: string;
    description: string;
    preferences: {
        ageFrom: number;
        ageTo: number;
        maxDistance: number;
        gender: string;
    };
};

export type UserUpdateResponse = UserItem;

export type UserPhotoUploaded = UserItemPhoto;

export type UserPhotoDeleteRequest = IdentifyType;

export type UserPhotoDeleteResponse = UserItemPhoto[];

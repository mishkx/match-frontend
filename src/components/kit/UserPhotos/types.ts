import { UserItemPhoto } from 'src/api';

export type UserPhotoItemProps = {
    id: number;
    src: string;
};

export type UserPhotosProps = {
    photos: UserItemPhoto[];
}

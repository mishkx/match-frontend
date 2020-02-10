import { UserItemPhoto } from 'src/api/user';
import { FileListItem } from './types';

export const convertPhotosToUploadedFile = (photo: UserItemPhoto): FileListItem => ({
    name: photo.src,
    response: photo,
    size: 0,
    thumbUrl: photo.thumb,
    type: '',
    uid: photo.id.toString(),
    url: photo.src,
});

import map from 'lodash/map';
import React, { memo } from 'react';
import UserPhotoItem from './UserPhotoItem';
import { UserPhotosProps } from './types';
import { UserPhotosSlider } from './UserPhotosSlider';

export const UserPhotos: React.FC<UserPhotosProps> = (props) => (
    <UserPhotosSlider>
        {map(props.photos, (photo) => (
            <UserPhotoItem
                key={photo.id}
                id={photo.id}
                src={photo.src}
            />
        ))}
    </UserPhotosSlider>
);

export default memo(UserPhotos);

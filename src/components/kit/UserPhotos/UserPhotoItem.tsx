import React, { memo } from 'react';
import { UserPhotoItemProps } from './types';
import { SlideImage } from './styles';
import UserPhotosSlideItem from './UserPhotosSlideItem';

export const UserPhotoItem: React.FC<UserPhotoItemProps> = (props) => (
    <UserPhotosSlideItem>
        <SlideImage src={props.src} alt={props.src}/>
    </UserPhotosSlideItem>
);

export default memo(UserPhotoItem);

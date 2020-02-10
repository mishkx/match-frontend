import React, { memo } from 'react';
import UserPhotosSlider from './UserPhotosSlider';
import UserPhotosSlideItem from './UserPhotosSlideItem';
import { NoPhoto } from './styles';

export const UserPhotosEmpty: React.FC = () => (
    <UserPhotosSlider>
        <UserPhotosSlideItem>
            <NoPhoto type={'user'}/>
        </UserPhotosSlideItem>
    </UserPhotosSlider>
);

export default memo(UserPhotosEmpty);

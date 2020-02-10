import React, { memo } from 'react';
import { Slide } from './styles';

type UserPhotosSlideItemProps = {
    children?: React.ReactNode;
};

export const UserPhotosSlideItem: React.FC<UserPhotosSlideItemProps> = ({ children }) => (
    <Slide>
        {children}
    </Slide>
);

export default memo(UserPhotosSlideItem);

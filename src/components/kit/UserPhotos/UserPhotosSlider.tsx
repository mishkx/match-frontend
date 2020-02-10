import React, { memo } from 'react';
import { Carousel } from '../../common';
import { Slider } from './styles';

type UserPhotosSliderProps = {
    children?: React.ReactNode;
};

export const UserPhotosSlider: React.FC<UserPhotosSliderProps> = ({ children }) => (
    <Slider>
        <Carousel dots={false}>
            {children}
        </Carousel>
    </Slider>
);

export default memo(UserPhotosSlider);

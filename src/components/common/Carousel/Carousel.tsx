import BaseCarousel, { CarouselProps as BaseCarouselProps } from 'antd/lib/carousel'
import React, { memo } from 'react';

interface CarouselProps extends BaseCarouselProps {
}

export const Carousel: React.FC<CarouselProps> = (props) => (
    <BaseCarousel {...props} />
);

export default memo(Carousel);

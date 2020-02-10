import BaseSlider, { SliderProps as BaseSliderProps } from 'antd/lib/slider';
import React, { memo } from 'react';

export interface SliderProps extends BaseSliderProps {
}

export const Slider: React.FC<SliderProps> = (props) => (
    <BaseSlider {...props} />
);

export default memo(Slider);

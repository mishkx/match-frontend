import BaseRadio, { RadioProps as BaseRadioProps } from 'antd/lib/radio';
import React, { memo } from 'react';

export interface RadioProps extends BaseRadioProps {
}

export const Radio: React.FC<RadioProps> = (props) => (
    <BaseRadio {...props} />
);

export default memo(Radio);

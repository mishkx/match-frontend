import BaseRadio, { RadioGroupProps as BaseRadioGroupProps } from 'antd/lib/radio';
import React, { memo } from 'react';

export interface RadioGroupProps extends BaseRadioGroupProps {
}

export const RadioGroup: React.FC<RadioGroupProps> = (props) => (
    <BaseRadio.Group {...props} />
);

export default memo(RadioGroup);

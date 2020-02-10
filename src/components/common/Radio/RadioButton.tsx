import BaseRadioButton, { RadioButtonProps as BaseRadioButtonProps } from 'antd/lib/radio/radioButton';
import React, { memo } from 'react';

export interface RadioButtonProps extends BaseRadioButtonProps {
}

export const RadioButton: React.FC<RadioButtonProps> = (props) => (
    <BaseRadioButton {...props} />
);

export default memo(RadioButton);

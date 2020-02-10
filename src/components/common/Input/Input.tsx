import BaseInput, { InputProps as BaseInputProps } from 'antd/lib/input'
import React, { memo } from 'react';

export interface InputProps extends BaseInputProps {
}

export const Input: React.FC<InputProps> = (props) => (
    <BaseInput {...props} />
);

export default memo(Input);

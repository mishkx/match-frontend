import BaseButton, { ButtonProps as BaseButtonProps } from 'antd/lib/button'
import React, { memo } from 'react';

export interface ButtonProps extends BaseButtonProps {
}

export const Button: React.FC<ButtonProps> = (props) => (
    <BaseButton {...props} />
);

export default memo(Button);

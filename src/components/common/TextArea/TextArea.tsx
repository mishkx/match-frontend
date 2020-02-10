import BaseInput, { TextAreaProps as BaseTextAreaProps } from 'antd/lib/input'
import React, { memo } from 'react';

export interface TextAreaProps extends BaseTextAreaProps {
}

export const TextArea: React.FC<TextAreaProps> = (props) => (
    <BaseInput.TextArea {...props} />
);

export default memo(TextArea);

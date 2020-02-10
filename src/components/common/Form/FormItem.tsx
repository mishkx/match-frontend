import BaseForm, { FormItemProps as BaseFormItemProps } from 'antd/lib/form'
import React, { memo } from 'react';

interface FormItemProps extends BaseFormItemProps {
    children?: React.ReactNode;
}

export const FormItem: React.FC<FormItemProps> = (props) => (
    <BaseForm.Item {...props} />
);

export default memo(FormItem);

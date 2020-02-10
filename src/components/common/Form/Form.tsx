import BaseForm, { FormProps as BaseFormProps } from 'antd/lib/form'
import React, { memo } from 'react';

interface FormProps extends BaseFormProps {
}

export const Form: React.FC<FormProps> = (props) => (
    <BaseForm {...props} />
);

export default memo(Form);

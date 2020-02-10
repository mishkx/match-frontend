import React, { memo } from 'react';
import { FormItem } from '../index';

type FieldWrapperProps = {
    children?: React.ReactNode;
    error?: string;
    hasFeedback?: boolean;
    isSubmitted?: boolean;
    isTouched?: boolean;
    label?: string;
}

const FieldWrapper: React.FC<FieldWrapperProps> = (props) => {
    const { error, children, label, hasFeedback, isSubmitted, isTouched } = props;
    const hasError = !!error;
    const submittedError = hasError && isSubmitted;
    const touchedError = hasError && isTouched;

    return (
        <FormItem
            label={label}
            hasFeedback={hasFeedback && (isTouched || isSubmitted)}
            help={submittedError || touchedError ? error : undefined}
            validateStatus={submittedError || touchedError ? 'error' : 'success'}
            children={children}
        />
    );
};

FieldWrapper.defaultProps = {
    hasFeedback: true,
};

export default memo(FieldWrapper);

import React from 'react';
import { getDisplayName } from '../helpers';
import { FieldWrapper } from '../../components/common/Field';
import { ComponentValueProps } from './types';
import { withFormFieldValues } from './index';

function withFormFieldValuesWrapper<T>(Component: React.ComponentType<T>): React.FC<ComponentValueProps<T>> {
    const Result: React.FC<ComponentValueProps<T>> = (props) => {
        const { field, form, label, hasFeedback } = props;

        return (
            <FieldWrapper
                hasFeedback={hasFeedback}
                label={label}
                error={form.errors[field.name] as string}
                isSubmitted={form.submitCount > 0}
                isTouched={!!form.touched[field.name]}
                children={withFormFieldValues(Component)(props)}
            />
        );
    };
    Result.displayName = `WithFormFieldValuesWrapper${getDisplayName(Component)}`;
    return Result;
}

export default withFormFieldValuesWrapper;

import { Field } from 'formik';
import React from 'react';
import { getDisplayName } from '../helpers';
import { ComponentProps, ComponentValueProps } from './types';
import { withFormFieldValuesWrapper } from './index';

function withFormFieldWrapper<T>(Component: React.ComponentType<T>): React.FC<ComponentProps<T>> {
    const Result: React.FC<ComponentProps<T>> = (inputProps) => (
        <Field name={inputProps.name} type={inputProps.type}>
            {(fieldProps: ComponentValueProps<T>) => withFormFieldValuesWrapper(Component)({
                ...fieldProps,
                ...inputProps,
            })}
        </Field>
    );
    Result.displayName = `WithFormFieldWrapper${getDisplayName(Component)}`;
    return Result;
}

export default withFormFieldWrapper;

import { Field } from 'formik';
import React from 'react';
import { getDisplayName } from '../helpers';
import { ComponentProps, ComponentValueProps } from './types';
import { withFormFieldValues } from './index';

function withFormField<T>(Component: React.ComponentType<T>): React.FC<ComponentProps<T>> {
    const Result: React.FC<ComponentProps<T>> = (inputProps) => (
        <Field name={inputProps.name} type={inputProps.type}>
            {(fieldProps: ComponentValueProps<T>) => withFormFieldValues(Component)({
                ...fieldProps,
                ...inputProps,
            })}
        </Field>
    );
    Result.displayName = `WithFormField${getDisplayName(Component)}`;
    return Result;
}

export default withFormField;

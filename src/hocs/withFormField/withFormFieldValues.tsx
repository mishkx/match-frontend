import React from 'react';
import { getDisplayName } from '../helpers';
import { ComponentProps, ComponentValueProps } from './types';
import { withFieldInput } from './index';

function withFormFieldValues<T>(Component: React.ComponentType<T>): React.FC<ComponentValueProps<T>> {
    const Result: React.FC<ComponentValueProps<T>> = (props) => {
        const { field, form, meta, ...rest } = props;

        const componentProps = {
            ...field,
            ...rest,
        } as ComponentProps<T>;

        return withFieldInput(Component)({
            componentProps,
            handleChange: (name, value) => {
                form.setFieldValue(name, value);
            },
            handleTouch: (name) => form.setFieldTouched(name, true),
            name: field.name,
        });
    };
    Result.displayName = `WithFormFieldValues${getDisplayName(Component)}`;
    return Result;
}

export default withFormFieldValues;

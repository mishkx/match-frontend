import React from 'react';
import { getDisplayName } from '../helpers';
import { FieldInputProps } from './types';

function withFieldInput<T>(Component: React.ComponentType<T>): React.FC<FieldInputProps<T>> {
    const Result: React.FC<FieldInputProps<T>> = (props) => {
        const { componentProps, handleChange, handleTouch, name } = props;

        const onChange = (arg: React.ChangeEvent<HTMLInputElement> | string) => {
            let value;

            if (arg && (arg as React.ChangeEvent<HTMLInputElement>).target) {
                value = (arg as React.ChangeEvent<HTMLInputElement>).target.value;
            } else {
                value = arg;
            }

            handleChange(name, value as string);
        };

        const onBlur = () => handleTouch(name);

        return <Component {...componentProps} onChange={onChange} onBlur={onBlur}/>;
    };
    Result.displayName = `WithFieldInput${getDisplayName(Component)}`;
    return Result;
}

export default withFieldInput;

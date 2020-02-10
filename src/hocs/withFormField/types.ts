import { FieldProps } from 'formik';

export type ComponentProps<T> = T & {
    name: string;
    type: string;
    hasFeedback?: boolean;
};

export type ComponentValueProps<T> = ComponentProps<T> & FieldProps<T>;

export type FieldInputProps<T> = {
    componentProps: ComponentProps<T>;
    name: string;
    handleChange(name: string, value: string): void;
    handleTouch(name: string): void;
};

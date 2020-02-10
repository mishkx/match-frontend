import { DateSchema } from 'yup';

declare module 'yup' {
    interface DateSchema {
        format(format: string): DateSchema;
    }
}

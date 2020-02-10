import { ActionType, Types } from 'typesafe-actions';
import { DateSchema } from 'yup';

export type RootAction = ActionType<typeof import('./actions').default>;

declare module 'typesafe-actions' {
    interface Types {
        RootAction: RootAction;
    }
}

declare module 'yup' {
    interface DateSchema {
        format(format: string): DateSchema;
    }
}

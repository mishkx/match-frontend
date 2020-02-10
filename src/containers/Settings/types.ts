import { FailureResponse, UserItem } from 'src/api';
import { Moment } from 'moment';
import { TFunction } from 'i18next';

export interface SettingsFormProps {
    isSaving?: boolean;
    error?: FailureResponse;
    user: UserItem;
    t: TFunction;
}

export interface SettingsFormValues {
    bornOn: Moment | Date | null;
    description: string | null;
    gender: string | null;
    name: string;
    preferredAge: number[];
    preferredGender: string | null;
    preferredMaxDistance: number | null;
}

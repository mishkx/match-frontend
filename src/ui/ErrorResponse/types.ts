import { FailureResponse } from '../../api/types';

export interface ErrorResponseProps {
    error?: FailureResponse;
    showNotification?: boolean;
}

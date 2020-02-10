import { URL_APP_CONFIG } from 'src/constants';
import { getRequest } from 'src/utils';
import { AppConfigResponse } from './types';

export const config = () => (
    getRequest<AppConfigResponse>({
        url: URL_APP_CONFIG,
    })
);

export default {
    config,
};

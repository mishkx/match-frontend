import { AppConfigRequest, AppConfigResponse } from 'src/api';
import { createAsyncAction } from './helpers';

const APP_CONFIG_GET = 'APP_CONFIG_GET';

export const getAppConfig = createAsyncAction<AppConfigRequest, AppConfigResponse>(APP_CONFIG_GET);

export default {
    getAppConfig,
};

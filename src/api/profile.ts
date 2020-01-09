import request from '../utils/request';
import { ProfileInfoResponse } from './types';
import { URL_PROFILE_INFO } from '../constants/urls';

export default {
    info() {
        return request<ProfileInfoResponse>({
            url: URL_PROFILE_INFO
        });
    }
};

import request from '../utils/request';
import { ProfileEntity } from './types';
import { URL_PROFILE_INFO } from '../constants/urls';

export default {
    info() {
        return request<ProfileEntity>({
            url: URL_PROFILE_INFO
        });
    }
};

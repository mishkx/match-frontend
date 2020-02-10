import { PATH_MATCHES, PATH_PROFILE, PATH_RECOMMENDATIONS } from './paths';
import { MenuItem } from './types';

export const IS_DEV = process.env.NODE_ENV !== 'production';

export const RECOMMENDATION_MIN_ITEMS = 5;

export const USER_PREFERENCE_DEFAULT_AGE_ADDING = 10;

export const USER_PREFERENCE_DEFAULT_DISTANCE = 50;

export const DATE_FORMAT = 'YYYY-MM-DD';

export const DATETIME_FORMAT = 'YYYY-MM-DD HH:mm:ss';

export const FALLBACK_LOCALE = 'en';

export const MENU: MenuItem[] = [
    {
        icon: 'setting',
        id: 'settings',
        path: PATH_PROFILE,
    },
    {
        icon: 'team',
        id: 'recommendations',
        path: PATH_RECOMMENDATIONS,
    },
    {
        icon: 'message',
        id: 'matches',
        path: PATH_MATCHES,
    },
];

export const URL_APP_CONFIG = '/api/v1/app/config';

export const URL_CHAT = '/api/v1/chats';

export const URL_CHAT_SINGLE = (id: number) => `${URL_CHAT}/${id}`;

export const URL_CHAT_SEND_MESSAGE = (id: number) => `${URL_CHAT}/${id}/message`;

export const URL_CHAT_SEND_PRESENCE = (id: number) => `${URL_CHAT}/${id}/presence`;

export const URL_CHOICE_DISLIKE = (id: number) => `/api/v1/choice/${id}/dislike`;

export const URL_CHOICE_LIKE = (id: number) => `/api/v1/choice/${id}/like`;

export const URL_MATCH = '/api/v1/matches';

export const URL_MATCH_SINGLE = (id: number) => `${URL_MATCH}/${id}`;

export const URL_RECOMMENDATION_COLLECTION = '/api/v1/recommendations';

export const URL_USER = '/api/v1/user';

export const URL_USER_PHOTO = '/api/v1/user/photo';

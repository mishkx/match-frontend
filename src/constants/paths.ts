export const PATH_INDEX = '/';

export const PATH_PROFILE = '/profile';

export const PATH_PROFILE_EDIT = `${PATH_PROFILE}/edit`;

export const PATH_PROFILE_PHOTOS = `${PATH_PROFILE}/photos`;

export const PATH_MATCHES = '/matches';

export const PATH_MATCHES_CHAT = (id?: number) => `/matches/chat/${id || ':id'}`;

export const PATH_MATCHES_USER = (id?: number) => `/matches/user/${id || ':id'}`;

export const PATH_RECOMMENDATIONS = '/recommendations';

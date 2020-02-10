import { URL_MATCH, URL_MATCH_SINGLE } from 'src/constants';
import { deleteRequest, getRequest } from 'src/utils';
import {
    MatchCollectionRequest,
    MatchCollectionResponse,
    MatchDeleteRequest,
    MatchDeleteResponse,
    MatchSingleRequest,
    MatchSingleResponse,
} from './types';

export const collection = (params: MatchCollectionRequest) => (
    getRequest<MatchCollectionResponse>({
        params,
        url: URL_MATCH,
    })
);

export const deleteSingle = (payload: MatchDeleteRequest) => (
    deleteRequest<MatchDeleteResponse>({
        url: URL_MATCH_SINGLE(payload.id),
    })
);

export const single = (payload: MatchSingleRequest) => (
    getRequest<MatchSingleResponse>({
        url: URL_MATCH_SINGLE(payload.id),
    })
);

export default {
    collection,
    deleteSingle,
    single,
};

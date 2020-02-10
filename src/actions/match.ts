import { createAction } from '@reduxjs/toolkit';
import {
    IdentifyType,
    MatchCollectionRequest,
    MatchCollectionResponse, MatchCollectionUserItem,
    MatchDeleteRequest,
    MatchDeleteResponse,
    MatchSingleRequest,
    MatchSingleResponse,
} from 'src/api';
import { createAsyncAction, createAsyncActionWithMeta } from './helpers';

const MATCH_COLLECTION_GET = 'MATCH_COLLECTION_GET';
const MATCH_SINGLE_DELETE = 'MATCH_SINGLE_DELETE';
const MATCH_SINGLE_GET = 'MATCH_SINGLE_GET';
const MATCH_CREATED = 'MATCH_CREATED';
const MATCH_DELETED = 'MATCH_DELETED';

export const getMatchCollection = createAsyncAction<
    MatchCollectionRequest,
    MatchCollectionResponse
    >(MATCH_COLLECTION_GET);

export const deleteSingleMatch = createAsyncActionWithMeta<
    MatchDeleteRequest,
    MatchDeleteResponse
    >(MATCH_SINGLE_DELETE);

export const getMatchSingleItem = createAsyncAction<
    MatchSingleRequest,
    MatchSingleResponse
    >(MATCH_SINGLE_GET);

export const matchCreated = createAction<MatchCollectionUserItem>(MATCH_CREATED);
export const matchDeleted = createAction<IdentifyType>(MATCH_DELETED);

export default {
    deleteSingleMatch,
    getMatchCollection,
    getMatchSingleItem,
    matchCreated,
    matchDeleted,
};

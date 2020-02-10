import { orderBy } from 'lodash';
import { denormalize } from 'normalizr';
import { MatchSchema } from 'src/schemas';
import { MatchCollectionUserItem } from '../../api/match';
import { MatchCollectionState } from '../../reducers/types';

export const getDenormalizedSortedData = (matchState: MatchCollectionState): MatchCollectionUserItem[] => {
    const data = denormalize(matchState.result, [MatchSchema], matchState.entities) as MatchCollectionUserItem[];
    return orderBy<MatchCollectionUserItem>(data, value => value.matchedAt, 'desc');
};

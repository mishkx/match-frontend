import { last } from 'lodash';
import React, { useCallback, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getMatchCollection } from 'src/actions';
import { MatchCollectionUserItem } from 'src/api/match';
import { MatchesList } from 'src/components/kit';
import { selectMatchItemsState } from 'src/selectors';
import { getDenormalizedSortedData } from './helpers';

const MatchesCollectionContainer: React.FC = () => {
    const dispatch = useDispatch();
    const matchState = useSelector(selectMatchItemsState);

    const loadMoreItems = useCallback((id?: number) => {
        dispatch(getMatchCollection.request({
            fromId: id,
        }));
    }, [dispatch]);

    useEffect(() => {
        loadMoreItems();
    }, [dispatch, loadMoreItems]);

    const hasMore = !matchState.isFetching && matchState.hasMoreItems;
    const data = getDenormalizedSortedData(matchState);
    const lastId = last<MatchCollectionUserItem>(data)?.id;
    const handleLoadMore = () => loadMoreItems(lastId);

    return (
        <MatchesList
            data={data}
            handleLoadMore={handleLoadMore}
            hasMore={hasMore}
        />
    );
};

export default MatchesCollectionContainer;

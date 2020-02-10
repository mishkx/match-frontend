import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getRecommendationCollection } from 'src/actions';
import { RecommendedUserItem } from 'src/api';
import { selectRecommendation, selectRecommendationsCount, selectRecommendationsState } from 'src/selectors';
import { RECOMMENDATION_MIN_ITEMS } from '../constants';

type Hook = () => RecommendedUserItem | undefined;

const useNextRecommendationUser: Hook = () => {
    const count = useSelector(selectRecommendationsCount);
    const user = useSelector(selectRecommendation);
    const state = useSelector(selectRecommendationsState);
    const dispatch = useDispatch();
    const hasMoreItems = state.hasMoreItems && !state.isFetching && count < RECOMMENDATION_MIN_ITEMS;

    useEffect(() => {
        if (hasMoreItems) {
            dispatch(getRecommendationCollection.request());
        }
    }, [hasMoreItems, dispatch]);

    return user;
};

export default useNextRecommendationUser;

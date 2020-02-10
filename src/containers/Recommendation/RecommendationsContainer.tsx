import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { deleteLastChoice, dislike, like } from 'src/actions';
import { Spin } from 'src/components/common';
import { NoRecommendations, RecommendationsLoading } from 'src/components/info';
import { ChoiceButtons, MatchCard, PageWrapper, UserCard } from 'src/components/kit';
import { useNextRecommendationUser } from 'src/hooks';
import { selectMatchedUser, selectRecommendationsState, selectUser } from 'src/selectors';
import { useTranslation } from 'react-i18next';

const RecommendationsContainer: React.FC = () => {
    const dispatch = useDispatch();
    const currentUser = useSelector(selectUser);
    const matchedUser = useSelector(selectMatchedUser);
    const recommendationState = useSelector(selectRecommendationsState);
    const nextRecommendationUser = useNextRecommendationUser();
    const { t } = useTranslation();

    if (!currentUser) {
        return <Spin/>;
    }

    if (recommendationState.isFetching) {
        return <RecommendationsLoading t={t}/>;
    }

    const handleSkipMatch = () => {
        dispatch(deleteLastChoice());
    };

    if (matchedUser) {
        return (
            <MatchCard
                currentUserId={currentUser.id}
                currentUserName={currentUser.name}
                currentUserPhotoSrc={currentUser.photos[0]?.thumb}
                matchedUserId={matchedUser.id}
                matchedUserName={matchedUser.name}
                matchedUserPhotoSrc={matchedUser.photos[0]?.thumb}
                handleSkipMatch={handleSkipMatch}
                t={t}
            />
        )
    }

    if (!nextRecommendationUser) {
        return <NoRecommendations t={t}/>;
    }

    const handleLike = (id: number) => {
        dispatch(like.request({ id }));
    };

    const handleDislike = (id: number) => {
        dispatch(dislike.request({ id }));
    };

    return (
        <PageWrapper>
            <UserCard
                id={nextRecommendationUser.id}
                name={nextRecommendationUser.name}
                age={nextRecommendationUser.age}
                description={nextRecommendationUser.description}
                distance={nextRecommendationUser.distance}
                gender={nextRecommendationUser.gender}
                photos={nextRecommendationUser.photos}
                t={t}
            />
            <ChoiceButtons
                userId={nextRecommendationUser.id}
                handleDislike={handleDislike}
                handleLike={handleLike}
            />
        </PageWrapper>
    );
};

export default RecommendationsContainer;

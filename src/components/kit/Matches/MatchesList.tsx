import { map } from 'lodash';
import React, { memo } from 'react';
import InfiniteScroll from 'react-infinite-scroller';
import { MatchCollectionUserItem } from 'src/api/match';
import { PATH_MATCHES_USER } from 'src/constants';
import { UserMatchedAvatar } from '../UserAvatar';
import * as Styled from './styles';

type MatchesListProps = {
    hasMore: boolean;
    initialLoad?: boolean;
    useWindow?: boolean;
    handleLoadMore: () => void;
    data: MatchCollectionUserItem[];
};

export const MatchesList: React.FC<MatchesListProps> = (props) => {
    const handleRenderItem = (user: MatchCollectionUserItem) => (
        <Styled.ListItem
            key={user.id}
            to={PATH_MATCHES_USER(user.id)}
        >
            <UserMatchedAvatar
                userId={user.id}
                userName={user.name}
                photoSrc={user.photo?.thumb}
                isVisited={!user.isVisited}
            />
        </Styled.ListItem>
    );

    return (
        <Styled.ListWrapper>
            <InfiniteScroll
                initialLoad={props.initialLoad}
                hasMore={props.hasMore}
                loadMore={props.handleLoadMore}
                useWindow={props.useWindow}
            >
                <Styled.List>
                    {map(props.data, handleRenderItem)}
                </Styled.List>
            </InfiniteScroll>
        </Styled.ListWrapper>
    );
};

MatchesList.defaultProps = {
    initialLoad: false,
    useWindow: false,
};

export default memo(MatchesList);

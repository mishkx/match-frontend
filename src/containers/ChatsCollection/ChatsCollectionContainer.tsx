import { last } from 'lodash';
import React, { useCallback, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getChatCollection } from 'src/actions';
import { ChatItem } from 'src/api/chat';
import { ChatList } from 'src/components/kit';
import { selectChatState } from 'src/selectors';
import { getDenormalizedSortedData } from './helpers';

export const ChatsCollectionContainer: React.FC = () => {
    const dispatch = useDispatch();
    const chatState = useSelector(selectChatState);

    const loadMoreItems = useCallback((id?: number) => {
        dispatch(getChatCollection.request({ params: { fromId: id } }));
    }, [dispatch]);

    useEffect(() => {
        loadMoreItems();
    }, [loadMoreItems]);

    const hasMore = !chatState.isFetching && chatState.hasMoreItems;
    const data = getDenormalizedSortedData(chatState);
    const lastId = last<ChatItem>(data)?.user.id;
    const handleLoadMore = () => loadMoreItems(lastId);

    return (
        <ChatList
            data={data}
            handleLoadMore={handleLoadMore}
            hasMore={hasMore}
        />
    );
};

export default ChatsCollectionContainer;

import { List } from 'antd';
import first from 'lodash/first';
import React, { memo } from 'react';
import InfiniteScroll from 'react-infinite-scroller';
import { ChatItem } from 'src/api';
import * as Styled from './styles';
import { ChatListItem } from './index';

type ChatListProps = {
    hasMore: boolean;
    initialLoad?: boolean;
    useWindow?: boolean;
    handleLoadMore: () => void;
    data: ChatItem[];
};

const ChatList: React.FC<ChatListProps> = (props) => {
    const handleRenderItem = (item: ChatItem) => {
        const lastMessage = first(item.messages);
        return (
            <ChatListItem
                lastMessage={lastMessage}
                unreadCount={item.unreadCount}
                user={item.user}
            />
        );
    };

    return (
        <Styled.ListWrapper>
            <InfiniteScroll
                initialLoad={props.initialLoad}
                hasMore={props.hasMore}
                loadMore={props.handleLoadMore}
                useWindow={props.useWindow}
            >
                <List
                    dataSource={props.data}
                    renderItem={handleRenderItem}
                    size={'small'}
                />
            </InfiniteScroll>
        </Styled.ListWrapper>
    );
};

ChatList.defaultProps = {
    initialLoad: false,
    useWindow: false,
};

export default memo(ChatList);

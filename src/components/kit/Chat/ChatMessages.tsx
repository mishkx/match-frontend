import { List } from 'antd';
import React, { memo } from 'react';
import InfiniteScroll from 'react-infinite-scroller';
import { ChatMessageCombined } from 'src/api';
import * as Styled from './styles';
import { ChatMessage } from './index';

type ChatMessagesProps = {
    currentUserId: number;
    hasMore: boolean;
    initialLoad?: boolean;
    isReverse?: boolean;
    useWindow?: boolean;
    handleLoadMore: () => void;
    data: ChatMessageCombined[];
};

const ChatMessages: React.FC<ChatMessagesProps> = (props) => {
    const handleRenderItem = (message: ChatMessageCombined) => (
        <ChatMessage
            currentUserId={props.currentUserId}
            message={message}
        />
    );

    return (
        <Styled.ChatMessagesWrapper>
            <InfiniteScroll
                initialLoad={props.initialLoad}
                hasMore={props.hasMore}
                loadMore={props.handleLoadMore}
                useWindow={props.useWindow}
                isReverse={props.useWindow}
            >
                <Styled.ChatReversedList>
                    <List
                        dataSource={props.data}
                        renderItem={handleRenderItem}
                        size={'small'}
                        split={false}
                    />
                </Styled.ChatReversedList>
            </InfiniteScroll>
        </Styled.ChatMessagesWrapper>
    );
};

ChatMessages.defaultProps = {
    initialLoad: false,
    isReverse: true,
    useWindow: false,
};

export default memo(ChatMessages);

import { filter, findLast, map, orderBy, union, values } from 'lodash';
import { denormalize } from 'normalizr';
import React, { useCallback, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getChatSingleItem, sendPresence } from 'src/actions';
import {
    ChatItem,
    ChatMessageCombined,
    ChatMessageItem,
    ChatMessageReceivedItem,
    ChatMessageSendingItem,
} from 'src/api/chat';
import { Spin } from 'src/components/common';
import { ChatMessages, ChatNavBar, ChatWrapper } from 'src/components/kit';
import { ChatSchema } from 'src/schemas';
import { selectChatState, selectUser } from 'src/selectors';
import { isSendingMessage } from 'src/utils';
import { ChatFormContainer } from '../index';
import { SingleChatContainerProps } from './types';

const SingleChatContainer: React.FC<SingleChatContainerProps> = (props) => {
    const dispatch = useDispatch();
    const idParam = Number(props.match.params.id);
    const currentUser = useSelector(selectUser);
    const chatState = useSelector(selectChatState);
    const item = chatState.entities.items[idParam];
    const itemState = chatState.entities.state[idParam];

    const loadMoreItems = useCallback((id: number, fromMessageId?: number) => {
        dispatch(getChatSingleItem.request({ id, params: { fromMessageId } }));
    }, [dispatch]);

    useEffect(() => {
        loadMoreItems(idParam);
    }, [dispatch, loadMoreItems, idParam]);

    if (!currentUser || !item || !itemState) {
        return <Spin/>;
    }

    const hasMore = !itemState.isFetching && (
        typeof itemState.hasMoreItems === 'undefined' || itemState.hasMoreItems
    );

    const chatItem = denormalize(item, ChatSchema, chatState.entities) as ChatItem;
    const sendingMessages = values<ChatMessageSendingItem>(chatState.entities.sendingMessages);
    const allMessages = union<ChatMessageCombined>(sendingMessages, chatItem.messages);
    const messages = orderBy<ChatMessageCombined>(allMessages, (value) => {
        return isSendingMessage(value) ? value.sentAt : value.createdAt;
    }, 'desc');

    const lastMessage = findLast<ChatMessageCombined>(messages, (value) => !isSendingMessage(value));
    const receivedMessages = filter<ChatMessageCombined>(messages, (value) => {
        return (value as ChatMessageReceivedItem).isReceived;
    }) as ChatMessageReceivedItem[];
    const lastMessageId = (lastMessage as ChatMessageItem)?.id;

    if (receivedMessages.length) {
        dispatch(sendPresence.request({
            id: item.user.id,
            messageIds: map(receivedMessages, message => message.id),
        }))
    }

    const handleLoadMore = () => loadMoreItems(idParam, lastMessageId);

    return (
        <ChatWrapper>
            <ChatNavBar user={chatItem.user}/>
            <ChatMessages
                currentUserId={currentUser.id}
                data={messages}
                hasMore={hasMore}
                handleLoadMore={handleLoadMore}
            />
            <ChatFormContainer userId={idParam}/>
        </ChatWrapper>
    );
};

export default SingleChatContainer;

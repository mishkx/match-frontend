import React, { memo, useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { matchCreated, matchDeleted, receiveMessage } from 'src/actions';
import { ChatItem, IdentifyType, MatchCollectionUserItem } from 'src/api';
import { Socket, SocketBroadcaster, SocketEventType, SocketOptions } from 'src/utils';

type SocketContainerProps = {
    broadcaster: SocketBroadcaster;
    options: SocketOptions;
    userId: number;
};

export const SocketContainer: React.FC<SocketContainerProps> = ({ broadcaster, options, userId }) => {
    const dispatch = useDispatch();
    const socket = new Socket(broadcaster, options);

    useEffect(() => {
        socket.joinUserChannel(userId)
            .listen(SocketEventType.ChatMessageCreated, (message: ChatItem) => {
                dispatch(receiveMessage(message));
            })
            .listen(SocketEventType.MatchCreated, (match: MatchCollectionUserItem) => {
                dispatch(matchCreated(match));
            })
            .listen(SocketEventType.MatchDeleted, (match: IdentifyType) => {
                dispatch(matchDeleted(match));
            });

        return () => {
            socket.leaveUserChannel();
        };
    }, [dispatch, socket, userId]);

    return null;
};

export default memo(SocketContainer);

import { orderBy } from 'lodash';
import { denormalize } from 'normalizr';
import { ChatItem } from 'src/api/chat';
import { ChatSchema } from 'src/schemas';
import { ChatState } from 'src/reducers/chat/types';

export const getDenormalizedSortedData = (chatState: ChatState): ChatItem[] => {
    const data = denormalize(chatState.result, [ChatSchema], chatState.entities) as ChatItem[];
    return orderBy<ChatItem>(data, value => value.updatedAt, 'desc');
};

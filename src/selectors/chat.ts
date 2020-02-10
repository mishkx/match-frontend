import { Selector, createSelector } from 'reselect';
import { initialState } from 'src/reducers/chat';
import { ChatState } from 'src/reducers/chat/types';
import { AppState } from 'src/reducers/types';

export const chatStateSelector: Selector<AppState, ChatState> = (state) => {
    return state.chat || initialState;
};

export const selectChatState = createSelector(
    chatStateSelector,
    (state) => state,
);

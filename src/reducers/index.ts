import { connectRouter } from 'connected-react-router';
import { History } from 'history';
import { combineReducers } from 'redux';
import chat from './chat';
import config from './config';
import lastChoice from './lastChoice';
import match from './match';
import recommendation from './recommendation';
import { AppState } from './types';
import user from './user';

const createRootReducer = (history: History) => combineReducers<AppState>({
    chat,
    config,
    lastChoice,
    match,
    recommendation,
    router: connectRouter(history),
    user,
});

export default createRootReducer;

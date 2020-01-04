import { connectRouter } from 'connected-react-router';
import { History } from 'history';
import { combineReducers } from 'redux';
import { AppState } from './types';

const createRootReducer = (history: History) => combineReducers<AppState>({
    router: connectRouter(history),
});

export default createRootReducer;

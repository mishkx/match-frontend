import { connectRouter } from 'connected-react-router';
import { History } from 'history';
import { combineReducers } from 'redux';
import profile from './profile';
import { AppState } from './types';

const createRootReducer = (history: History) => combineReducers<AppState>({
    profile,
    router: connectRouter(history),
});

export default createRootReducer;

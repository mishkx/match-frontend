import { connectRouter } from 'connected-react-router';
import { History } from 'history';
import { combineReducers } from 'redux';
import { IAppState } from '../types';

const createRootReducer = (history: History) => combineReducers<IAppState>({
    router: connectRouter(history),
});

export default createRootReducer;

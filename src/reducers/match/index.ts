import { combineReducers } from 'redux';
import { MatchState } from '../types';
import collection from './collection';
import single from './single';

export default combineReducers<MatchState>({
    collection,
    single,
});

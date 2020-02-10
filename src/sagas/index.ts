import { all, fork } from 'redux-saga/effects';
import chat from './chat';
import choice from './choice';
import config from './config';
import match from './match';
import recommendation from './recommendation';
import user from './user';

export default function* root() {
    yield all([
        fork(chat),
        fork(choice),
        fork(config),
        fork(match),
        fork(recommendation),
        fork(user),
    ]);
}

import { all, fork } from 'redux-saga/effects';
import choice from './choice';
import profile from './profile';
import recommendation from './recommendation';

export default function* root() {
    yield all([
        fork(choice),
        fork(profile),
        fork(recommendation),
    ]);
}

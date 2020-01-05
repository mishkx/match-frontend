import { fork } from 'redux-saga/effects';
import profile from './profile';
import recommendation from './recommendation';

export default function* root() {
    yield fork(profile);
    yield fork(recommendation);
}

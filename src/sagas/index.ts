import { fork } from 'redux-saga/effects';
import profile from './profile';

export default function* root() {
    yield fork(profile);
}

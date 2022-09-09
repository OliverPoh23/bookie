import { all, call } from 'redux-saga/effects';
// Sagas
import { fetchSignIn } from './sign-in/sagas';
import { fetchSignOut } from './sign-out/sagas';
import { fetchSessionCheck } from './session-check/sagas';

function* authSagas() {
  yield all([
    call(fetchSignIn),
    call(fetchSignOut),
    call(fetchSessionCheck),
  ]);
}

export default authSagas;

import { takeLatest, put } from 'redux-saga/effects';
import { signOutRequest, signOutSuccess, signOutFailure } from './actions';
import history from '../../../history';

function* fetchSignOutWorker() {
  try {
    yield put(signOutSuccess());
    // remove user from the local storage and redirect to home
    localStorage.removeItem('user');
    history.push('/');
  } catch ({ message }) {
    yield put(signOutFailure(message));
  }
}

export function* fetchSignOut() {
  yield takeLatest(signOutRequest().type, fetchSignOutWorker);
}

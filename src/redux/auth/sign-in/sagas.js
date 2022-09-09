import { takeLatest, put, delay } from 'redux-saga/effects';
import { signInRequest, signInSuccess, signInFailure } from './actions';

function* fetchSignInWorker() {
  try {
    const user = {
      name: 'Joanne Brown',
      balance: '1 925,45',
      pending: '95'
    };
    yield delay(1000);
    yield put(signInSuccess(user));
    // write user to the local storage
    localStorage.setItem('user', JSON.stringify(user));
  } catch ({ message }) {
    yield put(signInFailure(message));
  }
}

export function* fetchSignIn() {
  yield takeLatest(signInRequest().type, fetchSignInWorker);
}

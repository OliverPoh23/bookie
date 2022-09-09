import { takeLatest, put } from 'redux-saga/effects';
import { sessionCheckStart, sessionCheckEnd } from './actions';
import { signInSuccess, signInFailure } from '../sign-in/actions';
import history from '../../../history';

function* fetchSessionCheckWorker() {
  try {
    const user = localStorage.getItem('user');
    if (user) {
      yield put(signInSuccess(JSON.parse(user)));
    } else {
      yield put(sessionCheckEnd());
      // Redirect to the home screen
      if (window.location.pathname !== '/sign-in' && window.location.pathname !== '/sign-up') {
        history.push('/');
      }
    }
  } catch ({ message }) {
    yield put(signInFailure(message));
  }
}

export function* fetchSessionCheck() {
  yield takeLatest(sessionCheckStart().type, fetchSessionCheckWorker);
}

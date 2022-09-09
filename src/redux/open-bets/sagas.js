import { takeLatest, put } from 'redux-saga/effects';
import { fetchOpenBetsRequest, fetchOpenBetsSuccess, fetchOpenBetsFailure } from './actions';
import OpenBetsService from 'services/open-bets-service';
const openBetsService = new OpenBetsService();

function* fetchOpenBetsDataWorker() {
  try {
    const data = yield openBetsService.getOpenBets();
    yield put(fetchOpenBetsSuccess(data));
  } catch ({ message }) {
    yield put(fetchOpenBetsFailure(message));
  }
}

export function* fetchOpenBetsData() {
  yield takeLatest(fetchOpenBetsRequest().type, fetchOpenBetsDataWorker);
}

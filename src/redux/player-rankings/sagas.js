import { takeLatest, put } from 'redux-saga/effects';
import { fetchPlayerRankingsRequest, fetchPlayerRankingsSuccess, fetchPlayerRankingsFailure } from './actions';
import PlayerRankingsService from 'services/player-rankings-service';
const playerRankingsService = new PlayerRankingsService();

function* fetchPlayerRankingsDataWorker() {
  try {
    const data = yield playerRankingsService.getPlayerRankings();
    yield put(fetchPlayerRankingsSuccess(data));
  } catch ({ message }) {
    yield put(fetchPlayerRankingsFailure(message));
  }
}

export function* fetchPlayerRankingsData() {
  yield takeLatest(fetchPlayerRankingsRequest().type, fetchPlayerRankingsDataWorker);
}

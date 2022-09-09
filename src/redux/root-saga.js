import { all, call } from 'redux-saga/effects';
// Sagas
import authSagas from 'redux/auth/sagas';
import { fetchEventsData } from 'redux/events/sagas';
import { fetchOpenBetsData } from 'redux/open-bets/sagas';
import { fetchTransactionsData } from 'redux/transactions/sagas';
import { fetchPlayerRankingsData } from 'redux/player-rankings/sagas';

function* rootSaga() {
  yield all([
    call(authSagas),
    call(fetchEventsData),
    call(fetchOpenBetsData),
    call(fetchTransactionsData),
    call(fetchPlayerRankingsData),
  ]);
}

export default rootSaga;

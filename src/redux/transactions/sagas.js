import { takeLatest, put } from 'redux-saga/effects';
import { fetchTransactionsRequest, fetchTransactionsSuccess, fetchTransactionsFailure } from './actions';
import TransactionsService from 'services/transactions-service';
const transactionsService = new TransactionsService();

function* fetchTransactionsDataWorker() {
  try {
    const data = yield transactionsService.getTransactions();
    yield put(fetchTransactionsSuccess(data));
  } catch ({ message }) {
    yield put(fetchTransactionsFailure(message));
  }
}

export function* fetchTransactionsData() {
  yield takeLatest(fetchTransactionsRequest().type, fetchTransactionsDataWorker);
}

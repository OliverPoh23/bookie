import { TransactionsTypes } from './types';

export const fetchTransactionsRequest = () => ({
  type: TransactionsTypes.FETCH_TRANSACTIONS_REQUEST,
});
export const fetchTransactionsSuccess = data => ({
  type: TransactionsTypes.FETCH_TRANSACTIONS_SUCCESS,
  payload: data
});
export const fetchTransactionsFailure = error => ({
  type: TransactionsTypes.FETCH_TRANSACTIONS_FAILURE,
  payload: error
});

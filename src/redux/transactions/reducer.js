import { fetchState } from 'redux/_utils/fetch-state';
import { TransactionsTypes } from './types';

const INITIAL_STATE = fetchState('initial');

const reducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case TransactionsTypes.FETCH_TRANSACTIONS_REQUEST:
      return fetchState('request');
    case TransactionsTypes.FETCH_TRANSACTIONS_SUCCESS:
      return fetchState('success', action.payload);
    case TransactionsTypes.FETCH_TRANSACTIONS_FAILURE:
      return fetchState('failure', action.payload);
    default:
      return state;
  }
};

export default reducer;

import { createSelector } from 'reselect';

const transactionsSelector = state => state.transactions;

export const selectTransactions = createSelector(
  [transactionsSelector],
  transactions => transactions
);

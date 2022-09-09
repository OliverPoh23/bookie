import { createSelector } from 'reselect';

const openBetsSelector = state => state.openBets;

export const selectOpenBets = createSelector(
  [openBetsSelector],
  openBets => openBets
);

import { createSelector } from 'reselect';

const betSlipsSelector = state => state.betSlips;

export const selectBetSlips = createSelector(
  [betSlipsSelector],
  betSlips => betSlips
);
export const selectTotalBetSlips = createSelector(
  [betSlipsSelector],
  betSlips => betSlips.length
);
export const selectTotalBetSlipsRisk = createSelector(
  [betSlipsSelector],
  betSlips => betSlips.reduce((acc, { risk }) => risk ? acc + parseInt(risk) : acc, 0)
);
export const selectTotalBetSlipsWinnings = createSelector(
  [betSlipsSelector],
  betSlips => betSlips.reduce((acc, { toWin }) => toWin ? acc + parseInt(toWin) : acc, 0)
);

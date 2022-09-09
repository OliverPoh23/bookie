import { createSelector } from 'reselect';

const playerRankingsSelector = state => state.playerRankings;

export const selectPlayerRankings = createSelector(
  [playerRankingsSelector],
  playerRankings => playerRankings
);

import { combineReducers } from 'redux';
// Reducers
import user from 'redux/auth/reducer';
import events from 'redux/events/reducer';
import betSlips from 'redux/bet-slips/reducer';
import openBets from 'redux/open-bets/reducer';
import transactions from 'redux/transactions/reducer';
import playerRankings from 'redux/player-rankings/reducer';
import selectedRegion from 'redux/selected-region/reducer';

const rootReducer = combineReducers({
  user,
  events,
  betSlips,
  openBets,
  transactions,
  playerRankings,
  selectedRegion
});

export default rootReducer;

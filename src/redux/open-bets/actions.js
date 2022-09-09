import { OpenBetsTypes } from './types';

export const fetchOpenBetsRequest = () => ({
  type: OpenBetsTypes.FETCH_OPEN_BETS_REQUEST,
});
export const fetchOpenBetsSuccess = data => ({
  type: OpenBetsTypes.FETCH_OPEN_BETS_SUCCESS,
  payload: data
});
export const fetchOpenBetsFailure = error => ({
  type: OpenBetsTypes.FETCH_OPEN_BETS_FAILURE,
  payload: error
});

import { PlayerRankingsTypes } from './types';

export const fetchPlayerRankingsRequest = () => ({
  type: PlayerRankingsTypes.FETCH_PLAYER_RANKIGNS_REQUEST,
});
export const fetchPlayerRankingsSuccess = data => ({
  type: PlayerRankingsTypes.FETCH_PLAYER_RANKIGNS_SUCCESS,
  payload: data
});
export const fetchPlayerRankingsFailure = error => ({
  type: PlayerRankingsTypes.FETCH_PLAYER_RANKIGNS_FAILURE,
  payload: error
});

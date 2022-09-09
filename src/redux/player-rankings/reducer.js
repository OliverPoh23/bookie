import { fetchState } from 'redux/_utils/fetch-state';
import { PlayerRankingsTypes } from './types';

const INITIAL_STATE = fetchState('initial');

const reducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case PlayerRankingsTypes.FETCH_PLAYER_RANKIGNS_REQUEST:
      return fetchState('request');
    case PlayerRankingsTypes.FETCH_PLAYER_RANKIGNS_SUCCESS:
      return fetchState('success', action.payload);
    case PlayerRankingsTypes.FETCH_PLAYER_RANKIGNS_FAILURE:
      return fetchState('failure', action.payload);
    default:
      return state;
  }
};

export default reducer;

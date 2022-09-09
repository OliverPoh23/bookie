import { fetchState } from 'redux/_utils/fetch-state';
import { OpenBetsTypes } from './types';

const INITIAL_STATE = fetchState('initial');

const reducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case OpenBetsTypes.FETCH_OPEN_BETS_REQUEST:
      return fetchState('request');
    case OpenBetsTypes.FETCH_OPEN_BETS_SUCCESS:
      return fetchState('success', action.payload);
    case OpenBetsTypes.FETCH_OPEN_BETS_FAILURE:
      return fetchState('failure', action.payload);
    default:
      return state;
  }
};

export default reducer;

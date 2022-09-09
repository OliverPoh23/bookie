import { BetSlipsTypes } from './types';
import { toggleBetSlip } from './utils';

const INITIAL_STATE = [];

const reducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case BetSlipsTypes.TOGGLE_BET_SLIP:
      return toggleBetSlip(state, action.payload);
    case BetSlipsTypes.REMOVE_BET_SLIP:
      return state.filter(({ id }) => id !== action.payload);
    case BetSlipsTypes.REMOVE_ALL_BET_SLIPS:
      return [];
    default:
      return state;
  }
};

export default reducer;

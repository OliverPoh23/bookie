import { BetSlipsTypes } from './types';

export const toggleBetSlip = ({ eventIdx, betId }) => (dispatch, getState) => {
  const event = getState().events.data[eventIdx];
  const selectedBetSlip = event.games.find(({ id }) => id === betId);
  const betSlip = {
    id: selectedBetSlip.id,
    title: event.title,
    game: selectedBetSlip.game,
    price: selectedBetSlip.price,
  };
  dispatch({
    type: BetSlipsTypes.TOGGLE_BET_SLIP,
    payload: betSlip
  });
};

export const removeBetSlip = id => ({
  type: BetSlipsTypes.REMOVE_BET_SLIP,
  payload: id
});

export const removeAllBetSlips = () => ({
  type: BetSlipsTypes.REMOVE_ALL_BET_SLIPS
});

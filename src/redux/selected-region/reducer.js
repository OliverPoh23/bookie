import { SelectedRegionTypes } from './types';

const INITIAL_STATE = 'all';

const reducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case SelectedRegionTypes.SET_SELECTED_REGION:
      return action.payload;
    default:
      return state;
  }
};

export default reducer;

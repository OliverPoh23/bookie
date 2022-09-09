import { SelectedRegionTypes } from './types';

export const setSelectedRegion = event => ({
  type: SelectedRegionTypes.SET_SELECTED_REGION,
  payload: event
});

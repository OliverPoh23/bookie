import { createSelector } from 'reselect';

const selectedRegionSelector = state => state.selectedRegion;

export const selectSelectedRegion = createSelector(
  [selectedRegionSelector],
  selectedRegion => selectedRegion
);

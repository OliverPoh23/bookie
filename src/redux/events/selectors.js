import { createSelector } from 'reselect';

const eventsSelector = state => state.events;

export const selectEvents = createSelector(
  [eventsSelector],
  events => events
);

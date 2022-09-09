import { EventsTypes } from './types';

export const fetchEventsRequest = () => ({
  type: EventsTypes.FETCH_EVENTS_REQUEST,
});
export const fetchEventsSuccess = data => ({
  type: EventsTypes.FETCH_EVENTS_SUCCESS,
  payload: data
});
export const fetchEventsFailure = error => ({
  type: EventsTypes.FETCH_EVENTS_FAILURE,
  payload: error
});

import { takeLatest, put } from 'redux-saga/effects';
import { fetchEventsRequest, fetchEventsSuccess, fetchEventsFailure } from './actions';
import EventsService from 'services/events-service';
const eventsService = new EventsService();

function* fetchEventsDataWorker() {
  try {
    const data = yield eventsService.getEvents();
    yield put(fetchEventsSuccess(data));
  } catch ({ message }) {
    yield put(fetchEventsFailure(message));
  }
}

export function* fetchEventsData() {
  yield takeLatest(fetchEventsRequest().type, fetchEventsDataWorker);
}

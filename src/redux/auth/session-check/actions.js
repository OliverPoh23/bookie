import { SessionCheckTypes } from './types';

export const sessionCheckStart = () => ({
  type: SessionCheckTypes.FETCH_SESSION_CHECK_START
});
export const sessionCheckEnd = () => ({
  type: SessionCheckTypes.FETCH_SESSION_CHECK_END
});

import { SignOutTypes } from './types';

export const signOutRequest = () => ({
  type: SignOutTypes.FETCH_SIGN_OUT_REQUEST
});
export const signOutSuccess = userData => ({
  type: SignOutTypes.FETCH_SIGN_OUT_SUCCESS,
  payload: userData
});
export const signOutFailure = error => ({
  type: SignOutTypes.FETCH_SIGN_OUT_FAILURE,
  payload: error
});

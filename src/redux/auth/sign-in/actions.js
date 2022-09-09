import { SignInTypes } from './types';

export const signInRequest = () => ({
  type: SignInTypes.FETCH_SIGN_IN_REQUEST
});
export const signInSuccess = userData => ({
  type: SignInTypes.FETCH_SIGN_IN_SUCCESS,
  payload: userData
});
export const signInFailure = error => ({
  type: SignInTypes.FETCH_SIGN_IN_FAILURE,
  payload: error
});

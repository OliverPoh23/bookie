import { SignInTypes } from './sign-in/types';
import { SignOutTypes } from './sign-out/types';
import { SessionCheckTypes } from './session-check/types';

const INITIAL_STATE = {
  loading: false,
  userData: null,
  error: false
};

const reducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case SignInTypes.FETCH_SIGN_IN_REQUEST:
    case SignOutTypes.FETCH_SIGN_OUT_REQUEST:
    case SessionCheckTypes.FETCH_SESSION_CHECK_START:
      return {
        loading: true,
        userData: null,
        error: false
      };
    case SignInTypes.FETCH_SIGN_IN_SUCCESS:
      return {
        loading: false,
        userData: action.payload,
        error: false
      };
    case SignInTypes.FETCH_SIGN_IN_FAILURE:
    case SignOutTypes.FETCH_SIGN_OUT_FAILURE:
      return {
        loading: false,
        userData: false,
        error: action.payload
      };
    case SignOutTypes.FETCH_SIGN_OUT_SUCCESS:
    case SessionCheckTypes.FETCH_SESSION_CHECK_END:
      return {
        loading: false,
        userData: null,
        error: false
      };

    default:
      return state;
  }
};

export default reducer;

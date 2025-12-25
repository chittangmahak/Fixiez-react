import {
  authStart,
  loginSuccess,
  authFailure,
  logOut,
  setInitialized,
} from '../slices/authSlice';
import {
  loginApi,
  signupApi,
  verifyAuthApi,
  logoutApi,
} from '../../api/authApi';

export const loginUser = (credentials) => async (dispatch) => {
  dispatch(authStart());
  try {
    const res = await loginApi(credentials);
    // backend returns { user, token }
    dispatch(loginSuccess(res.user));
    return res;
  } catch (err) {
    dispatch(authFailure(err.message));
    throw err;
  }
};

export const signupUser = (payload) => async (dispatch) => {
  dispatch(authStart());
  try {
    const res = await signupApi(payload);

    // Some apps auto-login after signup:
    // dispatch(loginSuccess(res.user));
    // If you want "signup then go to login", don't login here.
    dispatch(setInitialized());
    return res;
  } catch (err) {
    dispatch(authFailure(err.message));
    throw err;
  }
};

export const verifySession = () => async (dispatch) => {
  try {
    const res = await verifyAuthApi();
    if (res?.success) dispatch(loginSuccess(res.user));
    else dispatch(setInitialized());
  } catch (err) {
    // If token expired or not present, still mark initialized
    dispatch(setInitialized());
  }
};

export const logoutUser = () => async (dispatch) => {
  try {
    await logoutApi();
  } catch (err) {
    // even if backend fails, clear state
  } finally {
    dispatch(logOut());
  }
};

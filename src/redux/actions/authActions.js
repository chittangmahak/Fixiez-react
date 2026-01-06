import {
  authStart,
  loginSuccess,
  authFailure,
  logOut,
  setInitialized,
} from '../slices/authSlices';

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
    dispatch(setInitialized());
  }
};

export const logoutUser = () => async (dispatch) => {
  try {
    await logoutApi();
  } catch (err) {
  } finally {
    dispatch(logOut());
  }
};

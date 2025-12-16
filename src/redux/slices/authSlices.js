import { createSlice } from '@reduxjs/toolkit';

const authSlice = createSlice({
  name: 'auth',
  initialState: {
    user: null,
    isLoggedIn: false,
    loading: false,
    error: null,
    isInitialized: false,
  },
  reducers: {
    authStart(state) {
      state.loading = true;
      state.error = null;
    },
    loginSuccess(state, action) {
      state.user = action.payload;
      state.isLoggedIn = true;
      state.loading = false;
      state.error = null;
      state.isInitialized = true;
    },
    authFailure(state, action) {
      state.loading = false;
      state.error = action.payload;
      state.isInitialized = true;
    },
    logOut(state) {
      state.user = null;
      state.isLoggedIn = false;
      state.loading = false;
      state.error = null;
      state.isInitialized = true;
    },
    clearError(state) {
      state.error = null;
    },
    setInitialized(state) {
      state.isInitialized = true;
    },
  },
});

export const {
  authStart,
  loginSuccess,
  authFailure,
  logOut,
  clearError,
  setInitialized,
} = authSlice.actions;

export default authSlice.reducer;

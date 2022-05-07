import { createSlice } from "@reduxjs/toolkit";

const initialState = { user: null, token: null };

const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {
    setCredentials: (state, { payload: { user, accessToken } }) => {
      state.user = user;
      state.token = accessToken;
    },
    logout: (state) => {
      state.user = null;
      state.token = null;
    },
  },
});

export default authSlice;

export const { setCredentials, logout } = authSlice.actions;

export const selectCurrentUser = (state) => state.auth.user;

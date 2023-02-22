import { createSlice } from '@reduxjs/toolkit';
import {
  register,
  login,
  gLogin,
  logout,
  refreshUser,
  updateUser,
  updateAvatar,
} from './authOperations';

const initialState = {
  user: {
    name: null,
    email: null,
    location: null,
    phone: null,
    birthday: null,
    avatarURL: null,
  },
  token: null,
  isLoggedIn: false,
  isRefreshing: false,
};

const authSlice = createSlice({
  name: 'auth',
  initialState,
  extraReducers: builder => {
    builder
      .addCase(register.fulfilled, (state, action) => {
        state.user = action.payload.user;
        state.isLoggedIn = false;
      })
      .addCase(login.fulfilled, (state, action) => {
        state.user = action.payload.user;
        state.token = action.payload.token;
        state.isLoggedIn = true;
      })
      .addCase(gLogin.fulfilled, (state, action) => {
        state.user = action.payload.user;
        state.token = action.payload.token;
        state.isLoggedIn = true;
      })
      .addCase(logout.fulfilled, (state, _) => {
        state.user = {
          name: null,
          email: null,
          location: null,
          phone: null,
          avatarURL: null,
        };
        state.token = null;
        state.isLoggedIn = false;
      })
      .addCase(refreshUser.pending, (state, _) => {
        state.isRefreshing = true;
      })
      .addCase(refreshUser.fulfilled, (state, action) => {
        state.user = action.payload.user;
        state.isLoggedIn = true;
        state.isRefreshing = false;
      })
      .addCase(refreshUser.rejected, (state, _) => {
        state.isRefreshing = false;
      })
      .addCase(updateUser.fulfilled, (state, action) => {
        state.isRefreshing = false;
        state.user = { ...state.user, ...action.payload };
      })
      .addCase(updateAvatar.fulfilled, (state, action) => {
        state.user = {
          ...state.user,
          avatarURL: action.payload.avatarURL,
        };
        state.isLoggedIn = true;
      })
      .addCase(updateAvatar.rejected, (state, action) => {
        state.error = action.payload;
      });
  },
});

export const authReducer = authSlice.reducer;

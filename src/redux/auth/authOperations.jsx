import axios from 'axios';
import { createAsyncThunk } from '@reduxjs/toolkit';
import { toast } from 'react-toastify';

axios.defaults.baseURL = 'https://pet-support-backend-v8vc.onrender.com/api/';

const setAuthHeader = token => {
  axios.defaults.headers.common.Authorization = `Bearer ${token}`;
};

const clearAuthHeader = () => {
  axios.defaults.headers.common.Authorization = '';
};

export const register = createAsyncThunk(
  'auth/register',
  async (credentials, thunkAPI) => {
    try {
      const response = await axios.post('auth/register', credentials);
      return response.data.data;
    } catch (error) {
      toast.error(`Something wrong - ${error.response.data.message}`);
      return thunkAPI.rejectWithValue(error.response.data.message);
    }
  }
);

export const login = createAsyncThunk(
  'auth/login',
  async (credentials, thunkAPI) => {
    try {
      const response = await axios.post('auth/login', credentials);
      setAuthHeader(response.data.data.token);
      return response.data.data;
    } catch (error) {
      toast.error(`Something wrong - ${error.response.data.message}`);
      return thunkAPI.rejectWithValue(error.response.data.message);
    }
  }
);

export const logout = createAsyncThunk('users/logout', async (_, thunkAPI) => {
  try {
    await axios.get('auth/logout');
    clearAuthHeader();
  } catch (error) {
    toast.error(`Something wrong - ${error.response.data.message}`);
    return thunkAPI.rejectWithValue(error.response.data.message);
  }
});

export const refreshUser = createAsyncThunk(
  'auth/refresh',
  async (_, thunkAPI) => {
    const state = thunkAPI.getState();
    const persistedToken = state.auth.token;
    if (persistedToken === null) {
      return thunkAPI.rejectWithValue('Unable to fetch user');
    }
    try {
      setAuthHeader(persistedToken);
      const response = await axios.get('users/current');
      return response.data.data;
    } catch (error) {
      console.log(`Something wrong - ${error.response.data.message}`);
      return thunkAPI.rejectWithValue(error.response.data.message);
    }
  }
);

export const updateUser = createAsyncThunk(
  'users/edit',
  async (credentials, thunkAPI) => {
    const { auth } = thunkAPI.getState();
    const persistedToken = auth.token;
    if (persistedToken === null) {
      return thunkAPI.rejectWithValue('Unable to update user');
    }
    try {
      const response = await axios.patch('users/edit', credentials);
      return response.data.data;
    } catch (error) {
      toast.error(`Something wrong - ${error.response.data.message}`);
      return thunkAPI.rejectWithValue(error.response.data.message);
    }
  }
);

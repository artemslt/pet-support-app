import axios from 'axios';
import { createAsyncThunk } from '@reduxjs/toolkit';

axios.defaults.baseURL = 'https://pet-support-backend-v8vc.onrender.com/api/';

const setAuthHeader = token => {
  axios.defaults.headers.common.Authorization = `Bearer ${token}`;
};

export const fetchAllFavorite = createAsyncThunk(
  'notices/fetchAllFavorite',
  async (_, thunkAPI) => {
    const state = thunkAPI.getState();
    const persistedToken = state.auth.token;
    if (persistedToken === null) {
      return thunkAPI.rejectWithValue('Unable to fetch pets');
    }
    try {
      setAuthHeader(persistedToken);
      const response = await axios.get('notices/favorite');

      return response.data.data.notices;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.response.data.message);
    }
  }
);
export const addFavorite = createAsyncThunk(
  'notices/addFavorite',
  async (id, thunkAPI) => {
    try {
      await axios.post(`notices/favorite/${id}`);
      const response = await axios.get('notices/favorite');
      return response.data.data.notices;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);

export const deleteFavorite = createAsyncThunk(
  'notices/deletePet',
  async (id, thunkAPI) => {
    const state = thunkAPI.getState();
    const persistedToken = state.auth.token;
    if (persistedToken === null) {
      return thunkAPI.rejectWithValue('Unable to fetch user');
    }
    try {
      const response = await axios.delete(`notices/favorite/${id}`);
      return response.data.data;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);

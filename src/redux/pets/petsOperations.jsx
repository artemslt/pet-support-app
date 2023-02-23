import axios from 'axios';
import { createAsyncThunk } from '@reduxjs/toolkit';
// import { toast } from 'react-toastify';

axios.defaults.baseURL = 'https://pet-support-backend-v8vc.onrender.com/api/';

const setAuthHeader = token => {
  axios.defaults.headers.common.Authorization = `Bearer ${token}`;
};

export const fetchAllPets = createAsyncThunk(
  'pets/fetchAllPets',
  async (_, thunkAPI) => {
    const state = thunkAPI.getState();
    const persistedToken = state.auth.token;
    if (persistedToken === null) {
      return thunkAPI.rejectWithValue('Unable to fetch pets');
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

export const addPet = createAsyncThunk(
  'pets/addPet',
  async (newPet, thunkAPI) => {
    try {
      const response = await axios.post('users/addpet', newPet, {
        headers: { 'Content-Type': 'multipart/form-data' },
      });
      console.log('addPet: res.data.data', response.data.data);
      return response.data.data;
    } catch (error) {
      console.log(error);
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);

export const deletePet = createAsyncThunk(
  'pets/deletePet',
  async (petId, thunkAPI) => {
    const state = thunkAPI.getState();
    const persistedToken = state.auth.token;
    if (persistedToken === null) {
      console.log('1');
      return thunkAPI.rejectWithValue('Unable to fetch user');
    }
    console.log('2');
    try {
      console.log('3');
      const response = await axios.delete(`users/${petId}`);
      console.log('4');
      return response.data.data;
    } catch (error) {
      console.log('5');
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);

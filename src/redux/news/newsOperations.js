import { createAsyncThunk } from '@reduxjs/toolkit';

import axios from 'axios';

axios.defaults.baseURL = 'https://pet-support-backend-v8vc.onrender.com/api';

export const fetchNews = createAsyncThunk(
  'news/fetchAll',
  async (_, { rejectWithValue }) => {
    try {
      const response = await axios.get('/news');
      return response.data;
    } catch (e) {
      console.log('fetchNewsErr:', e.message);
      return rejectWithValue(e.message);
    }
  }
);

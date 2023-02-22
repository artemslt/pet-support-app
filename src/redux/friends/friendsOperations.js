import { createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

export const fetchFriends = createAsyncThunk(
  'friends/fetchFriends',
  async () => {
    try {
      const response = await axios.get(
        'https://pet-support-backend-v8vc.onrender.com/api/friends'
      );
      return response.data.data.friends;
    } catch (error) {
      throw Error(error.response.data.message);
    }
  }
);

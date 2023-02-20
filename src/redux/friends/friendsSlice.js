import { createSlice } from '@reduxjs/toolkit';
import { fetchFriends } from './friendsOperations';

export const friendsSlice = createSlice({
  name: 'friends',
  initialState: {
    friends: [],
    status: 'idle',
    error: null,
  },
  reducers: {},
  extraReducers: builder => {
    builder
      .addCase(fetchFriends.pending, state => {
        state.status = 'loading';
      })
      .addCase(fetchFriends.fulfilled, (state, action) => {
        state.status = 'succeeded';
        state.friends = action.payload;
      })
      .addCase(fetchFriends.rejected, (state, action) => {
        state.status = 'failed';
        state.error = action.error.message;
      });
  },
});

export default friendsSlice.reducer;

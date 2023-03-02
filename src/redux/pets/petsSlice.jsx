import { createSlice } from '@reduxjs/toolkit';
import { fetchAllPets, addPet, deletePet } from './petsOperations';

const initialState = {
  list: [],
  isLoading: false,
  isDeleting: false,
  isAdding: false,
  error: null,
};

const petsSlice = createSlice({
  name: 'pets',
  initialState,
  extraReducers: builder => {
    builder
      .addCase(fetchAllPets.pending, (state, _) => {
        state.isRefreshing = true;
      })
      .addCase(fetchAllPets.fulfilled, (state, action) => {
        state.list = action.payload;
        state.isLoggedIn = true;
        state.isRefreshing = false;
      })
      .addCase(fetchAllPets.rejected, (state, _) => {
        state.isRefreshing = false;
      })

      .addCase(addPet.pending, state => {
        state.isAdding = true;
      })
      .addCase(addPet.fulfilled, (state, action) => {
        state.isAdding = false;
        state.error = null;
        state.list.push(action.payload.result);
      })
      .addCase(addPet.rejected, state => {
        state.isAdding = false;
      })

      .addCase(deletePet.pending, state => {
        state.isDeleting = true;
      })
      .addCase(deletePet.fulfilled, (state, action) => {
        state.isDeleting = false;
        state.error = null;
        state.list = state.list.filter(
          pet => pet._id !== action.payload.result._id
        );
      })
      .addCase(deletePet.rejected, state => {
        state.isDeleting = false;
      });
  },
});
export default petsSlice.reducer;

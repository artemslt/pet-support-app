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
  extraReducers: {
    [fetchAllPets.pending](state, _) {
      state.isRefreshing = true;
    },
    [fetchAllPets.fulfilled](state, action) {
      state.list = action.payload;
      state.isLoggedIn = true;
      state.isRefreshing = false;
    },
    [fetchAllPets.rejected](state, _) {
      state.isRefreshing = false;
    },

    [addPet.pending](state) {
      state.isAdding = true;
    },
    [addPet.fulfilled](state, action) {
      state.isAdding = false;
      state.error = null;
      state.list.push(action.payload.result);
    },
    [addPet.rejected](state) {
      state.isAdding = false;
    },

    [deletePet.pending](state) {
      state.isDeleting = true;
    },
    [deletePet.fulfilled](state, action) {
      state.isDeleting = false;
      state.error = null;
      state.list = state.list.filter(
        pet => pet._id !== action.payload.result._id
      );
    },
    [deletePet.rejected](state) {
      state.isDeleting = false;
    },
  },
});
export default petsSlice.reducer;

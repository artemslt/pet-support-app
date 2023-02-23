import { createSlice } from '@reduxjs/toolkit';
import { addPet, deletePet } from './petsOperations';

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
    [addPet.pending](state) {
      state.isAdding = true;
    },
    [addPet.fulfilled](state, action) {
      state.isAdding = false;
      state.error = null;
      state.list.pets.unshift(action.payload);
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
      console.log('action', action);
      state.list = [...state.list].filter(pet => pet._id !== action.payload);
    },
    [deletePet.rejected](state) {
      state.isDeleting = false;
    },
  },
});
export default petsSlice.reducer;

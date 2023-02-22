import { createSlice } from '@reduxjs/toolkit';
import { addPet, deletePet } from './petsOperations';

const initialState = {
  list: [
    {
      _id: '1',
      name: 'dog',
      birthday: '01.01.2023',
      breed: 'none',
      comments: 'Sleep lover',
    },
    {
      _id: '2',
      name: 'cat',
      birthday: '09.09.2020',
      breed: 'home',
      comments: 'Play lover',
    },
    {
      _id: '3',
      name: 'cat',
      birthday: '09.09.2020',
      breed: 'home',
      comments:
        'Lorem, ipsum dolor sit amet consectetur adipisicing elit. Minus aspernatur eaque, quos laboriosam quaerat ullam! Dolores fuga, adipisci id deserunt quibusdam sunt reprehenderit facere ducimus harum iure magnam sint cumque ratione a odit soluta possimus expedita unde dolor quas esse quis. Expedita pariatur iste magni nostrum dolor fugiat ex? Quis quam necessitatibus consectetur, cum corrupti quae omnis debitis porro quas harum placeat sapiente, error, cumque vero ex earum quia laboriosam aperiam rem fugiat tenetur mollitia officia atque minus. Quas vero soluta harum. Ex, reiciendis nisi? Dicta recusandae adipisci autem similique pariatur quam dolorum, porro dignissimos cum commodi accusamus soluta? Et?',
    },
  ],
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
      state.pets.unshift(action.payload);
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

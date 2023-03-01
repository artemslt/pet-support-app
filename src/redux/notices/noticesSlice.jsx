import { createSlice } from '@reduxjs/toolkit';
import {
  fetchAllFavorite,
  addFavorite,
  deleteFavorite,
} from './noticeOPerations';

const filterSlice = createSlice({
  name: 'notices',
  initialState: {
    list: [],
    filterValue: '',
  },
  reducers: {
    addFilter(state, action) {
      state.filterValue = action.payload;
    },
  },
  extraReducers: {
    [fetchAllFavorite.pending](state, _) {
      state.isRefreshing = true;
    },
    [fetchAllFavorite.fulfilled](state, action) {
      state.list = action.payload;
      state.isLoggedIn = true;
      state.isRefreshing = false;
    },
    [fetchAllFavorite.rejected](state, _) {
      state.isRefreshing = false;
    },
    [addFavorite.pending](state) {
      state.isAdding = true;
    },
    [addFavorite.fulfilled](state, action) {
      state.isAdding = false;
      state.error = null;
      state.list = action.payload;
    },
    [addFavorite.rejected](state) {
      state.isAdding = false;
    },

    [deleteFavorite.pending](state) {
      state.isDeleting = true;
    },
    [deleteFavorite.fulfilled](state, action) {
      state.isDeleting = false;
      state.error = null;
      state.list = state.list.filter(notice => notice._id !== action.meta.arg);
    },
    [deleteFavorite.rejected](state) {
      state.isDeleting = false;
    },
  },
});

export default filterSlice.reducer;
export const { addFilter } = filterSlice.actions;

import { createSlice } from '@reduxjs/toolkit';

const filterSlice = createSlice({
  name: 'filter',
  initialState: {
    filterValue: '',
  },
  reducers: {
    addFilter(state, action) {
      state.filterValue = action.payload;
    },
  },
});

export default filterSlice.reducer;
export const { addFilter } = filterSlice.actions;

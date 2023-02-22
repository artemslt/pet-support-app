import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  toggle: true,
};

export const isInputSlice = createSlice({
  name: 'isInput',
  initialState,
  reducers: {
    onSelector: state => {
      state.toggle = true;
    },
    onInput: state => {
      state.toggle = false;
    },
  },
});

export const { onSelector, onInput } = isInputSlice.actions;

export default isInputSlice.reducer;

import { createSlice } from '@reduxjs/toolkit';

export const filterSlice = createSlice({
  name: 'valueFilter',
  initialState: '',
  reducers: {
    setFilterValue(_, action) {
      return action.payload;
    },
  },
});

export const { setFilterValue } = filterSlice.actions;
export default filterSlice.reducer;

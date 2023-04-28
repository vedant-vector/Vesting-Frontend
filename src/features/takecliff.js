import { createSlice } from "@reduxjs/toolkit";

export const cliffSlice = createSlice({
  name: "cliffSlice",
  initialState: { value: { getcliff: 0 } },
  reducers: {
    addcliff: (state, action) => {
      state.value = action.payload;
    },
  },
});

export const { addcliff } = cliffSlice.actions;
export default cliffSlice.reducer;

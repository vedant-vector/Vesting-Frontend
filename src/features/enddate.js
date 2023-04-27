import { createSlice } from "@reduxjs/toolkit";

export const enddateSlice = createSlice({
  name: "enddateSlice",
  initialState: { value: { getendDate: "" } },
  reducers: {
    addendDate: (state, action) => {
      state.value = action.payload;
    },
  },
});

export const { addendDate } = enddateSlice.actions;
export default enddateSlice.reducer;

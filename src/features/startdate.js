import { createSlice } from "@reduxjs/toolkit";

export const startdateSlice = createSlice({
  name: "startdateSlice",
  initialState: { value: { getstartDate: "endtimeField" } },
  reducers: {
    addstartDate: (state, action) => {
      state.value = action.payload;
    },
  },
});

export const { addstartDate } = startdateSlice.actions;
export default startdateSlice.reducer;

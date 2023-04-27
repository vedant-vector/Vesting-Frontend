import { createSlice } from "@reduxjs/toolkit";

export const starttimeSlice = createSlice({
  name: "starttimeSlice",
  initialState: { value: { getstarttime: "00:00" } },
  reducers: {
    addstarttime: (state, action) => {
      state.value = action.payload;
    },
  },
});

export const { addstarttime } = starttimeSlice.actions;
export default starttimeSlice.reducer;

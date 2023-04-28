import { createSlice } from "@reduxjs/toolkit";

export const slicetimeSlice = createSlice({
  name: "slicetimeSlice",
  initialState: { value: { getsliceTime: "noslice" } },
  reducers: {
    addSlice: (state, action) => {
      state.value = action.payload;
    },
  },
});

export const { addSlice } = slicetimeSlice.actions;
export default slicetimeSlice.reducer;

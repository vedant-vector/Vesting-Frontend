import { createSlice } from "@reduxjs/toolkit";

export const takeInputSlice = createSlice({
  name: "tokenAddressField",
  initialState: { value: { tokenAddress: "" } },
  reducers: {
    addTokenAddress: (state, action) => {
      state.value = action.payload;
    },
  },
});

export const { addTokenAddress } = takeInputSlice.actions;
export default takeInputSlice.reducer;

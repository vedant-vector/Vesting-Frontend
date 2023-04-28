import { createSlice } from "@reduxjs/toolkit";

export const tokenAmountSlice = createSlice({
  name: "tokenAmountSlice",
  initialState: { value: { gettokenamount: 0 } },
  reducers: {
    addTokenAmount: (state, action) => {
      state.value = action.payload;
    },
  },
});

export const { addTokenAmount } = tokenAmountSlice.actions;
export default tokenAmountSlice.reducer;

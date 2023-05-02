import { createSlice } from "@reduxjs/toolkit";

export const tokenAmountSlice = createSlice({
  name: "tokenAmountSlice",
  initialState: { value: { gettokenamount: "" } },
  reducers: {
    addTokenAmount: (state, action) => {
      state.value = action.payload;
    },
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: false,
    }),
});

export const { addTokenAmount } = tokenAmountSlice.actions;
export default tokenAmountSlice.reducer;

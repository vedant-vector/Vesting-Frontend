import { createSlice } from "@reduxjs/toolkit";

export const benificiarySlice = createSlice({
  name: "benificiaryField",
  initialState: { value: { benificiaryAddress: "" } },
  reducers: {
    addBenificiaryAddress: (state, action) => {
      state.value = action.payload;
    },
  },
});

export const { addBenificiaryAddress } = benificiarySlice.actions;
export default benificiarySlice.reducer;

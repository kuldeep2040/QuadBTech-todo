import { createSlice } from "@reduxjs/toolkit";

const responsiveSlice = createSlice({
  name: "responsive",
  initialState: {
    isProfileVisible: true,
    isActionVisible: true,
  },
  reducers: {
    profileResponse: (state, action) => {
      state.isProfileVisible = action.payload;
    },
    actionResponse: (state, action) => {
      state.isActionVisible = action.payload;
    },
  },
});

export const { profileResponse, actionResponse } = responsiveSlice.actions;
export default responsiveSlice.reducer;

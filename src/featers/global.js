import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  userWantTo: "login",
};

const globalSlice = createSlice({
  name: "globalAttributes",
  initialState,
  reducers: {
    getUserWantTo: (state, { payload }) => {
      state.userWantTo = payload;
    },
  },
});

export const { getUserWantTo } = globalSlice.actions;

export default globalSlice.reducer;

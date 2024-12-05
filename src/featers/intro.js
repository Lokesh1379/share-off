import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  intro: true,
};

const introSlice = createSlice({
  name: "introSlice",
  initialState,
  reducers: {
    setIntro: (state, { payload }) => {
      state.intro = payload;
    },
  },
});

export const { setIntro } = introSlice.actions;

export default introSlice.reducer;

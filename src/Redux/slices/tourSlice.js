import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  tour: [],
};

export const tourSlice = createSlice({
  name: "tourSlice",
  initialState,
  reducers: {},
});

// Action creators are generated for each case reducer function
export const {} = tourSlice.actions;

export default tourSlice.reducer;

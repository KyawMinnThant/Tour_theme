import { configureStore } from "@reduxjs/toolkit";
import tourSlice from "../slices/tourSlice";

export const store = configureStore({
  reducer: {
    tourSlice: tourSlice,
  },
});

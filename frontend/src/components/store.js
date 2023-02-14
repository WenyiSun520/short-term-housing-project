import { configureStore } from "@reduxjs/toolkit";
import rentInfoSliceReducer from "../features/rentInfo/rentSlice";

export const store = configureStore({
  reducer: {
    rentsInfo: rentInfoSliceReducer,
  },
});
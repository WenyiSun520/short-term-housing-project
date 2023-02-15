import { configureStore } from "@reduxjs/toolkit";
import rentInfoSliceReducer from "../features/rentInfo/rentSlice";
import commentSliceReducer from '../features/comments/commentSlice';
import tenantSliceReducer from "../features/tenantInfo/tenantSlice";

export const store = configureStore({
  reducer: {
    rentsInfo: rentInfoSliceReducer,
    comments: commentSliceReducer,
    tenantsInfo : tenantSliceReducer
  },
});
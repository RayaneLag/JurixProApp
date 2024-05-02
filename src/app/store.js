import { configureStore } from "@reduxjs/toolkit";
import { apiSlice } from "./Slices/apislice";
import { userslice } from "./Slices/UserSlice";

export const store = configureStore({
  reducer: {
    [apiSlice.reducerPath]: apiSlice.reducer,
    user: userslice.reducer,
  },

  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(apiSlice.middleware),
});

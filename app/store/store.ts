import { configureStore } from "@reduxjs/toolkit";
import loadsReducer from "./features/loadsSlice";
export const store = configureStore({
  reducer: {
    loadsReducer,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;

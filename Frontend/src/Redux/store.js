import { configureStore } from "@reduxjs/toolkit";
import MainStateSlice from "./Slice/MainStateSlice";
export const store = configureStore({
  reducer: {
    mainState: MainStateSlice,
  },
});

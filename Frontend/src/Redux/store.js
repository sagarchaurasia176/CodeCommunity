import { configureStore } from "@reduxjs/toolkit";
import LoginFormSlice from "./Slice/LoginFormSlice";

export const store = configureStore({
  reducer: {
    userLogin: LoginFormSlice,
  },
});

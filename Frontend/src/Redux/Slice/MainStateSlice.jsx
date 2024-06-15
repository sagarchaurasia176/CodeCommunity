import React from "react";
import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  loading: false,
};

// LoginForm apply here so we get
export const MainStateSlice = createSlice({
  name: "mainState",
  initialState,
  reducers: {},
});

// action and provider apply here
export const {} = MainStateSlice.actions;
export default MainStateSlice.reducer;

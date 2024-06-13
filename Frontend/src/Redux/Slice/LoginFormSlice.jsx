import React from "react";
import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  loading: false,
};

// LoginForm apply here so we get
export const LoginForm = createSlice({
  name: "userLogin",
  initialState,
  reducers: {
   
  },
});

// action and provider apply here
export const { check } = LoginForm.actions;
export default LoginForm.reducer;

import { createSlice } from "@reduxjs/toolkit";
import {INITIALIZE_PLAYERS} from "../types";

const socketSlice = createSlice({
  name: 'socket',
  extraReducers: builder => {
    builder
      .addCase(INITIALIZE_PLAYERS, (state, action) => {

    })
  }
})
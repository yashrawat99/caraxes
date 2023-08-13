import { createSlice, PayloadAction } from "@reduxjs/toolkit";

type InitialState = {
  value: LoadState;
};
type LoadState = {
  loads: any[];
};
const initialState = {
  value: {
    loads: [],
  } as LoadState,
} as InitialState;

export const loads = createSlice({
  name: "loadsReducer",
  initialState,
  reducers: {
    populateList: () => initialState,
  },
});

export const { populateList } = loads.actions;
export default loads.reducer;

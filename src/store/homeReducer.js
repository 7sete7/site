import { createSlice } from "@reduxjs/toolkit";

export const home = createSlice({
  name: "home",
  initialState: {
    loading: true,
  },
  reducers: {
    populate(state, { payload }) {
      if (payload != null) return payload;
    },
  },
});

export const getData = ({ home }) => home;

export const { populate } = home.actions;
export default home.reducer;

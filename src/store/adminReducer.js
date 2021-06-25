import { createSlice } from "@reduxjs/toolkit";

export const admin = createSlice({
  name: "admin",
  initialState: {},
  reducers: {
    save(state, { payload }) {
      console.log("%cSave dispatched", "color: red; font-size:12pt; font-weight: bold;");
      console.table(payload);

      state[payload.block] = Object.assign({}, state[payload.block], payload);
    },
    populate(state, { payload }) {
      return payload;
    }
  },
});

export const getBlockData = block => ({ admin }) => admin[block];
export const getData = ({ admin }) => admin;

export const { save, populate } = admin.actions;
export default admin.reducer;

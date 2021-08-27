import { createSlice } from "@reduxjs/toolkit";
import updateAdminData from "../DAL/updateAdminData";

//TODO loading state
export const admin = createSlice({
  name: "admin",
  initialState: {},
  reducers: {
    save(state, { payload }) {
      console.log("%cSave dispatched", "color: red; font-size:12pt; font-weight: bold;");
      console.table(payload);

      delete payload.changed;
      state[payload.block] = Object.assign({}, state[payload.block], payload);

      const data = [state[payload.block]];
      delete data[0]._id;
      updateAdminData(data);
    },
    populate(state, { payload }) {
      if (payload != null) {
        payload.user = state.user;
        return payload;
      }
    },
    logged(state, { payload }) {
      state["user"] = payload;
    }
  },
});

export const getBlockData = block => ({ admin }) => admin?.[block];
export const getData = ({ admin }) => admin;
export const getUser = ({ admin }) => admin["user"];

export const { save, populate, logged } = admin.actions;
export default admin.reducer;

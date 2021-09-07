import { createSlice } from "@reduxjs/toolkit";
import updateAdminData from "../DAL/updateAdminData";

export const admin = createSlice({
  name: "admin",
  initialState: {
    loading: true
  },
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
    },
    openSnack(state, { payload }) {
      state["snack"] = {
        open: true,
        message: payload.msg,
        type: payload.type
      }
    },
    closeSnack(state) {
      state["snack"].open = false;
    }
  },
});

export const getBlockData = block => ({ admin }) => admin?.[block];
export const getData = ({ admin }) => admin;
export const getUser = ({ admin }) => admin["user"];
export const getSnack = ({ admin }) => admin["snack"];

export const { save, populate, logged, openSnack, closeSnack } = admin.actions;
export default admin.reducer;

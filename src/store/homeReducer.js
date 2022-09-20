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
    initScripts(state) {
      if (state == null || state.metadata == null) return;
      const {
        metadata: { tagManager },
      } = state;

      if (tagManager != null) window.initGTM(tagManager);
      return state;
    },
  },
});

export const getData = ({ home }) => home;

export const { populate, initScripts } = home.actions;
export default home.reducer;

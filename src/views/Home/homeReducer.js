import { createSlice } from "@reduxjs/toolkit";

export const home = createSlice({
  name: "home",
  initialState: {
    projects: [
      {
        image:
          "https://vignette.wikia.nocookie.net/disney/images/4/41/DoofenshmirtzFull.jpg/revision/latest?cb=20190819173522",
        imageFill: "cover", // cover | contain
        title: "Estudo de caso Doof",
        description:
          "Identificando oportunidades para capturar Perry o ornitorrinco",
        tags: ["Figma"],
        link: "#",
      },
    ],

    posts: [
      {
        image:
          "https://vignette.wikia.nocookie.net/disney/images/4/41/DoofenshmirtzFull.jpg/revision/latest?cb=20190819173522",
        imageFill: "cover", // cover | contain
        title: "Estudo de caso Doof",
        description:
          "Identificando oportunidades para capturar Perry o ornitorrinco",
        tags: ["Figma"],
        link: "#",
      },
    ],
  },
  reducers: {
    increment: (state) => {
      // Redux Toolkit allows us to write "mutating" logic in reducers. It
      // doesn't actually mutate the state because it uses the Immer library,
      // which detects changes to a "draft state" and produces a brand new
      // immutable state based off those changes
      state.value += 1;
    },
    decrement: (state) => {
      state.value -= 1;
    },
  },
});

export const { increment, decrement } = home.actions;

// The function below is called a selector and allows us to select a value from
// the state. Selectors can also be defined inline where they're used instead of
// in the slice file. For example: `useSelector((state) => state.counter.value)`
export const getData = (state) => ({ projects: state.home.projects, posts: state.home.posts });

export default home.reducer;

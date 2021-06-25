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
        description: "Identificando oportunidades para capturar Perry o ornitorrinco",
        tags: ["Figma", "Leo"],
        link: "#",
      },
    ],

    posts: [
      {
        image:
          "https://vignette.wikia.nocookie.net/disney/images/4/41/DoofenshmirtzFull.jpg/revision/latest?cb=20190819173522",
        imageFill: "cover", // cover | contain
        title: "Estudo de caso Doof",
        description: "Identificando oportunidades para capturar Perry o ornitorrinco",
        tags: ["Figma"],
        link: "#",
      },
    ],
  },
  reducers: {},
});

export const getData = state => ({ projects: state.home.projects, posts: state.home.posts });

export default home.reducer;

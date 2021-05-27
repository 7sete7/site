import purple from "@material-ui/core/colors/deepPurple";
import red from "@material-ui/core/colors/red";
import grey from "@material-ui/core/colors/grey";
import { createSlice } from "@reduxjs/toolkit";

const primaryColor = { main: "#1F2572" };
const secondaryColor = { main: "#B122CB" };

const themeConfig = {
  typography: {
    useNextVariants: true,
    h1: { fontWeight: 600 },
    h2: { fontWeight: 600 },
    h3: { fontWeight: 600 },
    h4: { fontWeight: 600 },
    h5: { fontWeight: 600 },
  },
  palette: {
    primary: primaryColor,
    secondary: secondaryColor,
    auxiliar: {
      main: "#CDEF77"
    },
    error: red,

    textPrimary: grey[800],
    textSecondary: purple[800],

    // Used by `getContrastText()` to maximize the contrast between the background and
    // the text.
    contrastThreshold: 3,
    // Used to shift a color's luminance by approximately
    // two indexes within its tonal palette.
    // E.g., shift from Red 500 to Red 300 or Red 700.
    // tonalOffset: 0.2
  },
};

// All the following keys are optional.
// We try our best to provide a great default value.
const defaultTheme = themeConfig;

export const settings = createSlice({
  name: "settings",
  initialState: {
    theme: defaultTheme,
    darkMode: false,
    colorsSwaped: false,
  },
  reducers: {
    toggleThemeMode: (state, action) => {
      if (action.payload) {
        //darknode set
        state.darkMode = true;
        state.theme = {
          ...themeConfig,
          palette: {
            ...themeConfig.palette,
            primary: state.theme.palette.primary,
            secondary: state.theme.palette.secondary,
            type: "dark",
          },
        };
      } else {
        state.darkMode = false;
        state.theme = {
          ...themeConfig,
          palette: {
            ...themeConfig.palette,
            primary: state.theme.palette.primary,
            secondary: state.theme.palette.secondary,
          },
        };
      }

      state.value = action.payload;
    },
    swapThemeColors: (state, action) => {
      if (action.payload) {
        // colorsSwaped
        state.colorsSwaped = true;
        state.theme = {
          ...themeConfig,
          palette: {
            ...state.theme.palette,
            primary: secondaryColor,
            secondary: primaryColor,
          },
        };
      } else {
        state.colorsSwaped = false;
        state.theme = {
          ...themeConfig,
          palette: {
            ...state.theme.palette,
            primary: primaryColor,
            secondary: secondaryColor,
          },
        };
      }
    },
  },
});

export const { toggleThemeMode, swapThemeColors } = settings.actions;

export const isDarkMode = (state) => state.settings.darkMode;

export const isColorSwaped = (state) => state.settings.colorsSwaped;

export const getTheme = (state) => state.settings.theme;

export default settings.reducer;

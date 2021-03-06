import purple from "@material-ui/core/colors/deepPurple";
import red from "@material-ui/core/colors/red";
import grey from "@material-ui/core/colors/grey";
import start from "lodash/startCase";

const themeConfig = {
  typography: {
    useNextVariants: true,
    h1: { fontWeight: 600 },
    h2: { fontWeight: 600 },
    h3: { fontWeight: 600 },
    h4: {
      fontWeight: 600,
      fontFamily: ["Arvo", "Arial"].join(),
    },
    h5: { fontWeight: 600 },

    fontFamily: ["Montserrat", "sans-serif"].join(),
  },
  palette: {
    primary: { main: "#1F2572", light: "#8E91B7" },
    secondary: { main: "#B122CB", light: "#D78FE3" },
    auxiliar: {
      main: "#CDEF77",
      light: "#E5F6BA",
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
  overrides: {
    MuiButton: {
      root: {
        padding: "12px",
        borderRadius: 8,
      },
    },
    MuiCardContent: {
      root: {
        "&:last-child": {
          paddingBottom: null,
        },
      },
    },
  },

  copyPaletteWith(colors = {}) {
    const copy = { ...this };

    const col = ["primary", "secondary", "auxiliar"];
    const palette = col.reduce((acc, itm) => ({ 
      ...acc, 
      [itm]: Object.assign(
        {},
        copy.palette[itm], 
        colors[itm] && { main: colors[itm] }, 
        colors[`helper${start(itm)}`] && { light: colors[`helper${start(itm)}`] 
      }) 
    }), {});

    copy.palette = palette;
    return copy;
  }
};

export default themeConfig;

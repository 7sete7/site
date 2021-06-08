import purple from "@material-ui/core/colors/deepPurple";
import red from "@material-ui/core/colors/red";
import grey from "@material-ui/core/colors/grey";

export const primaryColor = { main: "#007DFF" };
export const secondaryColor = { main: "#afafaf" };

const themeConfig = {
  typography: {
    h6: {
      fontWeight: 600,
    },
  },
  palette: {
    primary: primaryColor,
    secondary: secondaryColor,
  },
  overrides: {
    MuiTab: {
      root: {
        minWidth: "0!important",
      },
    },
  },
};

export default themeConfig;

import blue from "@material-ui/core/colors/blue";
import grey from "@material-ui/core/colors/grey"

const themeConfig = {
  typography: {
    h6: {
      fontWeight: 600,
    },
  },
  palette: {
    primary: blue,
    secondary: {
      main: grey[400]
    },
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

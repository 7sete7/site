import blue from "@material-ui/core/colors/blue";
import grey from "@material-ui/core/colors/grey";
import green from "@material-ui/core/colors/green";

const themeConfig = {
  typography: {
    h6: {
      fontWeight: 600,
    },
  },
  palette: {
    primary: blue,
    secondary: {
      main: grey[400],
    },
    success: green,
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

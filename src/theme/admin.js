import purple from "@material-ui/core/colors/deepPurple";
import red from "@material-ui/core/colors/red";
import grey from "@material-ui/core/colors/grey";

export const primaryColor = { main: "#007DFF" };
export const secondaryColor = { main: "#B122CB", light: "#D78FE3" };

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
};

export default themeConfig;

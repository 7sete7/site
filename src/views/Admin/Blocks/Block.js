import React from "react";

import Paper from "@material-ui/core/Paper";
import Box from "@material-ui/core/Box";
import Typography from "@material-ui/core/Typography";

import withStyles from "@material-ui/core/styles/withStyles";

const Block = ({ title, children, classes }) => (
  <Paper elevation={0}>
    <Box className={classes.box} mb={8}>
      
      <Typography variant="h6" paragraph>
        {title}
      </Typography>

      <Box className={classes.content}>
        {children}
      </Box>
    </Box>
  </Paper>
);

const styles = theme => ({
  content: {
    padding: theme.spacing(2),
    [theme.breakpoints.down("xs")]: {
      padding: theme.spacing(1)
    }
  },

  box: {
    padding: theme.spacing(3),
    [theme.breakpoints.down("xs")]: {
      padding: theme.spacing(1)
    }
  },
})

export default withStyles(styles)(Block);

import React from "react";

import Paper from "@material-ui/core/Paper";
import Box from "@material-ui/core/Box";
import Typography from "@material-ui/core/Typography";

const Block = ({ title, children }) => (
  <Paper elevation={0}>
    <Box p={3} mb={8}>
      
      <Typography variant="h6" paragraph>
        {title}
      </Typography>

      <Box p={2}>
        {children}
      </Box>
    </Box>
  </Paper>
);

export default Block;

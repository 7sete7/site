import React from "react";

import Box from "@material-ui/core/Box";
import Typography from "@material-ui/core/Typography";
import Grid from "@material-ui/core/Grid";

import withStyles from "@material-ui/core/styles/withStyles";

import { CurvedLine, BoxThingy } from "./svgs";

const WavyBox = ({ classes }) => (
  // <Box display="flex" mt={5} bgcolor="#F6F6F6">
  <Grid container className={classes.container}>
    <Grid item xs={12} sm={6}>
      <Box position="relative" width="100%" py={3} px={2}>
        <Box display="flex" flexDirection="column" alignItems="center">
          <Box display="flex" p={1}>
            <BoxThingy height="100px" />
            <div style={{ marginLeft: 8 }}>
              <Typography variant="h5">Pós - UniRitter</Typography>
              <Typography variant="body2">Especialização user experience</Typography>
              <Typography variant="caption">03/2021 - atualmente</Typography>
            </div>
          </Box>
          <Box display="flex" p={1} mt={3}>
            <div style={{ marginRight: 8 }}>
              <Typography variant="h5">Formação - Unicesumar</Typography>
              <Typography variant="body2">Análise e desenvolvimento de sistemas</Typography>
              <Typography variant="caption">05/2017 - 10/2020</Typography>
            </div>
            <BoxThingy height="100px" />
          </Box>
        </Box>
      </Box>
    </Grid>
    <Grid item xs={12} sm={6}>
      <Box position="relative" width="100%" py={3} px={2}>
        <Box display="flex" flexDirection="column" alignItems="center" position="relative">
          <CurvedLine height="100%" position="absolute" maxWidth="100%" />
          <Box height={116} p={1}>
            <Typography variant="h5">Pós - UniRitter</Typography>
            <Typography variant="body2">Especialização user experience</Typography>
            <Typography variant="caption">03/2021 - atualmente</Typography>
          </Box>
          <Box height={116} p={1} mt={3} pr={3}>
            <Typography variant="h5">Formação - Unicesumar</Typography>
            <Typography variant="body2">Análise e desenvolvimento de sistemas</Typography>
            <Typography variant="caption">05/2017 - 10/2020</Typography>
          </Box>
        </Box>
      </Box>
    </Grid>
  </Grid>
  // </Box>
);

const style = theme => ({
  container: {
    marginTop: theme.spacing(5),
    backgroundColor: "#F6F6F6"
  },
});

export default withStyles(style)(WavyBox);

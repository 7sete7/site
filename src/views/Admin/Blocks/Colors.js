import React from "react";

import Box from "@material-ui/core/Box";
import Typography from "@material-ui/core/Typography";
import Grid from "@material-ui/core/Grid";
import { Button, ColorInput } from "../../../components/Forms";

import Block from "./Block";

const labelProps = { shrink: true, style: { fontWeight: 600 } };
const Colors = () => (
  <Block title="Cores">
    <Grid container spacing={2}>
      <Grid item xs={12} sm={6}>
        <Typography variant="h6">Principais</Typography>

        <Box pt={2}>
          <ColorInput variant="outlined" InputLabelProps={labelProps} label="Primária" fullWidth />
          <ColorInput variant="outlined" InputLabelProps={labelProps} label="Secundária" fullWidth />
          <ColorInput variant="outlined" InputLabelProps={labelProps} label="Auxiliar" fullWidth />
        </Box>
      </Grid>

      <Grid item xs={12} sm={6}>
        <Typography variant="h6">Helpers</Typography>

        <Box pt={2}>
          <ColorInput variant="outlined" InputLabelProps={labelProps} label="Primária" fullWidth />
          <ColorInput variant="outlined" InputLabelProps={labelProps} label="Secundária" fullWidth />
          <ColorInput variant="outlined" InputLabelProps={labelProps} label="Auxiliar" fullWidth />
        </Box>
      </Grid>

      <Grid container item xs={12} justify="flex-end">
        <Grid item xs={12} sm={6} md={4}>
          <Button variant="contained" color="primary" fullWidth disableElevation>
            Salvar cores
          </Button>
        </Grid>
      </Grid>
    </Grid>
  </Block>
);

export default Colors;

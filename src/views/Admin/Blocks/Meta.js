import React from "react";

import Box from "@material-ui/core/Box";
import TextField from "@material-ui/core/TextField";
import Grid from "@material-ui/core/Grid";

import { Button } from "../../../components/Forms";
import Block from "./Block";

const Meta = () => (
  <Block title={<b>Leo</b>}>
    <Box p={2}>
      <Grid container spacing={1}>
        <Grid item xs={12} sm={8}>
          <TextField variant="outlined" placeholder="Nome no logo" fullWidth />
        </Grid>
        <Grid item xs={12} sm={8}>
          <TextField variant="outlined" placeholder="Cargo" fullWidth />
        </Grid>
        <Grid item xs={12} sm={8}>
          <TextField variant="outlined" placeholder="Nome" fullWidth />
        </Grid>
        <Grid item xs={12} sm={8}>
          <TextField variant="outlined" placeholder="Descrição (com html)" multiline rows={4} fullWidth />
        </Grid>
        <Grid item xs={12} sm={8}>
          <TextField variant="outlined" placeholder="Link da foto" fullWidth />
        </Grid>
        <Grid container item xs={12} sm={8} justify="flex-end" alignItems="flex-end">
          <Grid item xs={12} sm={6} md={4}>
            <Button variant="contained" color="primary" fullWidth disableElevation>
              Salvar dados
            </Button>
          </Grid>
        </Grid>
      </Grid>
    </Box>
  </Block>
);

export default Meta;

import React from "react";

import TextField from "@material-ui/core/TextField";
import Grid from "@material-ui/core/Grid";
import { Button } from "../../../components/Forms";

import Block from "./Block";

const labelProps = { shrink: true, style: { fontWeight: 600 } };

const Contact = () => (
  <Block title="Contatos">
    <Grid container spacing={3}>
      <Grid item xs={12} sm={6}>
        <TextField variant="outlined" InputLabelProps={labelProps} label="Linkedin" fullWidth />
      </Grid>
      <Grid item xs={12} sm={6}>
        <TextField variant="outlined" InputLabelProps={labelProps} label="Behance" fullWidth />
      </Grid>
      <Grid item xs={12} sm={6}>
        <TextField variant="outlined" InputLabelProps={labelProps} label="Whatsapp" fullWidth />
      </Grid>
      <Grid item xs={12} sm={6}>
        <TextField variant="outlined" InputLabelProps={labelProps} label="Email" fullWidth />
      </Grid>
      <Grid item xs={12} sm={6}>
        <TextField variant="outlined" InputLabelProps={labelProps} label="Github" fullWidth />
      </Grid>
      <Grid xs={0} sm={6}></Grid>
      <Grid container item xs={12} sm={6} justify="flex-end" alignItems="flex-end">
        <Grid item xs={12} sm={6}>
          <Button variant="contained" color="primary" fullWidth disableElevation>
            Salvar contatos
          </Button>
        </Grid>
      </Grid>
    </Grid>
  </Block>
);

export default Contact;

import React from "react";

import Grid from "@material-ui/core/Grid";
import { Button, TextInput } from "../../../components/Forms";

import Block from "./Block";

const Contact = () => (
  <Block title="Contatos">
    <Grid container spacing={3}>
      <Grid item xs={12} sm={6}>
        <TextInput label="Linkedin" fullWidth />
      </Grid>
      <Grid item xs={12} sm={6}>
        <TextInput label="Behance" fullWidth />
      </Grid>
      <Grid item xs={12} sm={6}>
        <TextInput label="Whatsapp" fullWidth />
      </Grid>
      <Grid item xs={12} sm={6}>
        <TextInput label="Email" fullWidth />
      </Grid>
      <Grid item xs={12} sm={6}>
        <TextInput label="Github" fullWidth />
      </Grid>
      <Grid xs={false} sm={6}></Grid>
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

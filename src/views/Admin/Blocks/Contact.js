import React from "react";

import Grid from "@material-ui/core/Grid";
import { Button, TextInput } from "../../../components/Forms";

import Block from "./Block";
import useBlock from "../../../hooks/useBlock";

import ResetButton from "../../../components/ResetButton";

const Contact = () => {
  const { onChange, onSave, onReset, values } = useBlock("contact");
  return (
    <Block title="Contatos">
      <Grid container spacing={3}>
        <Grid item xs={12} sm={6}>
          <TextInput label="Linkedin" fullWidth value={values.linkedin} onChange={onChange("linkedin")} />
        </Grid>
        <Grid item xs={12} sm={6}>
          <TextInput label="Behance" fullWidth value={values.behance} onChange={onChange("behance")} />
        </Grid>
        <Grid item xs={12} sm={6}>
          <TextInput label="Whatsapp" fullWidth value={values.whatsapp} onChange={onChange("whatsapp")} />
        </Grid>
        <Grid item xs={12} sm={6}>
          <TextInput label="Email" fullWidth value={values.email} onChange={onChange("email")} />
        </Grid>
        <Grid item xs={12} sm={6}>
          <TextInput label="Github" fullWidth value={values.github} onChange={onChange("github")} />
        </Grid>
        <Grid item xs={false} sm={6}></Grid>
        <Grid container item xs={12} justify="flex-end" alignItems="flex-end" spacing={1}>
          <Grid item xs={5} sm={4} md={3}>
            <ResetButton onClick={onReset} />
          </Grid>
          <Grid item xs={12} sm={6} md={4} onClick={onSave}>
            <Button variant="contained" color="primary" fullWidth disableElevation>
              Salvar contatos
            </Button>
          </Grid>
        </Grid>
      </Grid>
    </Block>
  );
};

export default Contact;

import React from "react";

import Box from "@material-ui/core/Box";
import Grid from "@material-ui/core/Grid";

import { Button, TextInput } from "../../../components/Forms";
import Block from "./Block";

import useBlock from "../../../hooks/useBlock";
import ResetButton from "../../../components/ResetButton";

const Meta = () => {
  const { onChange, onSave, onReset, values } = useBlock("metadata");

  return (
    <Block title={<b>Meta dados</b>}>
      <Box p={2}>
        <Grid container spacing={1}>
          <Grid item xs={12} sm={8}>
            <TextInput label="Nome no logo" fullWidth value={values.logo} onChange={onChange("logo")} />
          </Grid>
          <Grid item xs={12} sm={8}>
            <TextInput label="Cargo" fullWidth value={values.role} onChange={onChange("role")} />
          </Grid>
          <Grid item xs={12} sm={8}>
            <TextInput label="Nome" fullWidth value={values.name} onChange={onChange("name")} />
          </Grid>
          <Grid item xs={12} sm={8}>
            <TextInput label="Descrição (com html)" multiline rows={4} fullWidth value={values.description} onChange={onChange("description")} />
          </Grid>
          <Grid item xs={12} sm={8}>
            <TextInput label="Link da foto" fullWidth value={values.pic} onChange={onChange("pic")} />
          </Grid>
          <Grid container item xs={12} sm={8} justify="flex-end" alignItems="flex-end" spacing={1}>
            <Grid item xs={6} sm={5} md={4}>
              {/* <Button variant="contained" color="default" fullWidth disableElevation onClick={onReset}>
                <ResetIcon />
              </Button> */}
              <ResetButton onClick={onReset} />
            </Grid>
            <Grid item xs={12} sm={6} md={4}>
              <Button variant="contained" color="primary" fullWidth disableElevation onClick={onSave}>
                Salvar dados
              </Button>
            </Grid>
          </Grid>
        </Grid>
      </Box>
    </Block>
  );
};

export default Meta;

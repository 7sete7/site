import React, { useState, useCallback } from "react";

import Box from "@material-ui/core/Box";
import Grid from "@material-ui/core/Grid";
import Typography from "@material-ui/core/Typography";
import CardHeader from "@material-ui/core/CardHeader";
import Card from "@material-ui/core/Card";
import CardContent from "@material-ui/core/CardContent";
import CardActions from "@material-ui/core/CardActions";
import FormControlLabel from "@material-ui/core/FormControlLabel";
import Checkbox from "@material-ui/core/Checkbox";
import Button from "@material-ui/core/Button";

import { Button as SaveButton, TextInput } from "../../../components/Forms";
import Block from "./Block";

const Header = () => (
  <Box>
    <CardHeader
      title="Livros"
      subheader={<>&nbsp;</>}
      titleTypographyProps={{ variant: "h6" }}
      style={{ padding: 0 }}
      action={
        <SaveButton variant="contained" color="primary" disableElevation style={{ margin: 10 }}>
          Adcionar livro
        </SaveButton>
      }
    />
  </Box>
);

const Books = () => {
  return (
    <Block title={<Header />}>
      <Box display="flex">
        <Card style={{ width: "35%" }}>
          <CardContent>
            <Grid container spacing={1}>
              <Grid item xs={12}>
                <TextInput label="Título" fullWidth />
              </Grid>
              <Grid item xs={12}>
                <TextInput label="Autor" fullWidth />
              </Grid>
              <Grid item xs={12}>
                <TextInput label="Link da imagem" fullWidth />
              </Grid>

              <Grid item xs={12}>
                <FormControlLabel
                  control={<Checkbox name="reading" color="primary" />}
                  label={<Typography variant="body2">Lendo atualmente</Typography>}
                />
              </Grid>
            </Grid>
          </CardContent>
          <CardActions>
            <Grid container>
              <Grid item xs={5}>
                <Button fullWidth variant="text" color="secondary">
                  Excluir
                </Button>
              </Grid>
              <Grid item xs={7}>
                <Button fullWidth variant="contained" color="primary" disableElevation>
                  Salvar
                </Button>
              </Grid>
            </Grid>
          </CardActions>
        </Card>
      </Box>
    </Block>
  );
};

export default Books;

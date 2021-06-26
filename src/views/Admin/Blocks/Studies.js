import React from "react";

import Box from "@material-ui/core/Box";
import Grid from "@material-ui/core/Grid";
import CardHeader from "@material-ui/core/CardHeader";
import Card from "@material-ui/core/Card";
import CardContent from "@material-ui/core/CardContent";
import CardActions from "@material-ui/core/CardActions";
import ButtonGroup from "@material-ui/core/ButtonGroup";
import Button from "@material-ui/core/Button";

import { Button as SaveButton, TextInput } from "../../../components/Forms";
import Block from "./Block";
import useBlock from "../../../hooks/useBlock";

const Header = () => (
  <Box>
    <CardHeader
      title="Estudos"
      subheader={<>&nbsp;</>}
      titleTypographyProps={{ variant: "h6" }}
      style={{ padding: 0 }}
      action={
        <SaveButton variant="contained" color="primary" disableElevation style={{ margin: 10 }}>
          Adcionar estudo
        </SaveButton>
      }
    />
  </Box>
);

const Studies = () => {
  const { onChange, onSave, values } = useBlock("studies");
  return (
    <Block title={<Header />}>
      <Box display="flex">
        <Card style={{ width: "35%" }}>
          <CardContent>
            <Grid container spacing={1}>
              <Grid item xs={12}>
                <TextInput label="Título" placeholder="(Tipo - Organização)" fullWidth />
              </Grid>
              <Grid item xs={12}>
                <TextInput label="Nome do curso" fullWidth />
              </Grid>
              <Grid item xs={12}>
                <Grid container spacing={1}>
                  <Grid item xs={6}>
                    <TextInput label="Início" fullWidth compact />
                  </Grid>
                  <Grid item xs={6}>
                    <TextInput label="Término" fullWidth compact />
                  </Grid>
                </Grid>
              </Grid>
              <Grid item xs={12}>
                <ButtonGroup fullWidth color="primary" variant="outlined" disableElevation>
                  <Button variant="contained">Formação</Button>
                  <Button>Curso</Button>
                </ButtonGroup>
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

export default Studies;

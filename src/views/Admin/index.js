import React from "react";

import Paper from "@material-ui/core/Paper";
import Box from "@material-ui/core/Box";
import Typography from "@material-ui/core/Typography";
import Container from "@material-ui/core/Container";
import TextField from "@material-ui/core/TextField";
import Grid from "@material-ui/core/Grid";
import { Button, ColorInput } from "../../components/Forms";

import withStyles from "@material-ui/core/styles/withStyles";

const labelProps = { shrink: true, style: { fontWeight: 600 } };
const Admin = () => {
  return (
    <Box py={5} bgcolor="#F4F6F8">
      <Container maxWidth="md">
        <Paper elevation={0}>
          <Box p={3} mb={8}>
            <Typography variant="h6" paragraph>
              Meta dados
            </Typography>

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
          </Box>
        </Paper>

        <Paper elevation={0}>
          <Box p={3} mb={8}>
            <Typography variant="h6" paragraph>
              Contatos
            </Typography>

            <Box p={2}>
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
            </Box>
          </Box>
        </Paper>

        <Paper elevation={0}>
          <Box p={3} mb={8}>
            <Typography variant="h6" paragraph>
              Cores
            </Typography>

            <Box p={4}>
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
            </Box>
          </Box>
        </Paper>
      </Container>
    </Box>
  );
};

export default Admin;

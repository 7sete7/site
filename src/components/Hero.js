import React from "react";
import Button from "@material-ui/core/Button";
import Typography from "@material-ui/core/Typography";
import Box from "@material-ui/core/Box";
import Grid from "@material-ui/core/Grid";

import ExternalIcon from "@material-ui/icons/LaunchRounded";

const Hero = () => (
  <Box py={3} maxWidth="55%">
    <Typography color="textSecondary">UX / UI / Product Designer</Typography>
    <Typography color="textPrimary" variant="h5" gutterBottom>
      Olá
    </Typography>
    <Typography color="textPrimary" paragraph>
      meu nome é Eduardo
    </Typography>
    <Typography color="textPrimary" paragraph>
      Meu objetivo é melhorar o mundo entregando experiências melhores através
      do design. Serei referência no meu trabalho, por isso tenho a meta de
      alcançar Design Lead em 5 anos. Também faço projetos pessoais de dev por
      hobby.
    </Typography>

    <Grid container spacing={2}>
      <Grid item xs={12} sm={5}>
        <Button color="secondary" variant="contained" fullWidth>
          Meus projetos
        </Button>
      </Grid>
      <Grid item xs={12} sm={5}>
        <Button
          color="primary"
          variant="contained"
          endIcon={<ExternalIcon />}
          fullWidth
        >
          Currículo
        </Button>
      </Grid>
    </Grid>
  </Box>
);

export default Hero;

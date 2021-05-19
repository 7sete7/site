import React from "react";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import Box from "@material-ui/core/Box";
import Link from "@material-ui/core/Link";
import Typography from "@material-ui/core/Typography";
import Grid from "@material-ui/core/Grid";

import Icon from "@material-ui/core/Icon";
import GitIcon from "@material-ui/icons/GitHub";
import LinIcon from "@material-ui/icons/LinkedIn";
import WhatsIcon from "@material-ui/icons/WhatsApp";
import MailIcon from "@material-ui/icons/MailOutline";

const Header = () => (
  <AppBar position="static" color="transparent">
    <Toolbar disableGutters={false}>
      <Grid container>
        <Grid item  container xs={4} justify="center">
          <Typography variant="h4" color="inherit" noWrap>
            Eduardo.Viva
          </Typography>
        </Grid>
        <Grid item container wrap="nowrap" xs={4} justify="center" alignItems="center">
          <Typography noWrap>
            <Link href="#">Meu portfólio</Link>&nbsp;&nbsp;
            <Link href="#">Meus projetos</Link>
          </Typography>
        </Grid>
        <Grid item container wrap="nowrap" xs={4} justify="center">
          <Box display="flex" justifyContent="space-evenly" flexGrow="0.4" alignItems="center">
            <Icon>
              <GitIcon />
            </Icon>
            <Icon>
              <LinIcon />
            </Icon>
            <Icon>
              <WhatsIcon />
            </Icon>
            <Icon>
              <MailIcon />
            </Icon>
          </Box>
        </Grid>
      </Grid>
    </Toolbar>
  </AppBar>
);

export default Header;

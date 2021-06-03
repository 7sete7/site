import React from "react";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import Box from "@material-ui/core/Box";
import Link from "@material-ui/core/Link";
import Typography from "@material-ui/core/Typography";
import Grid from "@material-ui/core/Grid";
import Hidden from "@material-ui/core/Hidden";

import Icon from "@material-ui/core/Icon";
import GitIcon from "@material-ui/icons/GitHub";
import LinIcon from "@material-ui/icons/LinkedIn";
import WhatsIcon from "@material-ui/icons/WhatsApp";
import BehanceIcon from "./Icons/Behance";
import MenuIcon from "@material-ui/icons/Menu";

const Header = () => (
  <AppBar position="static" color="inherit">
    <Toolbar disableGutters={false} style={{ zIndex: 150 }}>
      <Grid container>
        {/* Logo */}
        <Hidden smDown>
          <Grid item container md={4} justify="center">
            <Typography variant="h4" color="inherit" noWrap>
              Eduardo.Viva
            </Typography>
          </Grid>
        </Hidden>
        <Hidden mdUp>
          <Grid item container wrap="nowrap" xs={8} alignItems="center">
            <Typography variant="h4" color="inherit" noWrap>
              E
            </Typography>
          </Grid>
        </Hidden>

        {/* Meio */}
        <Hidden smDown>
          <Grid item container wrap="nowrap" md={4} justify="center" alignItems="center">
            {/* <Typography noWrap>
              <Link href="#">Meu portfólio</Link>&nbsp;&nbsp;
              <Link href="#projetos">Meus projetos</Link>
            </Typography> */}
          </Grid>
        </Hidden>

        {/* Icons */}
        <Hidden smDown>
          <Grid item container wrap="nowrap" xs={4} justify="center">
            <Box display="flex" justifyContent="space-evenly" flexGrow="0.4" alignItems="center">
              <Link href="//linkedin.com/in/edu-viva" target="_blank" color="textPrimary" underline="none">
                <Icon>
                  <LinIcon />
                </Icon>
              </Link>
              <Link href="//wa.me/5551999918720" target="_blank" color="textPrimary" underline="none">
                <Icon>
                  <WhatsIcon />
                </Icon>
              </Link>
              <Link href="//github.com/EduViva" target="_blank" color="textPrimary" underline="none">
                <Icon>
                  <GitIcon />
                </Icon>
              </Link>
              <Link href="//behance.net/eduviva" target="_blank" color="textPrimary" underline="none">
                <Icon>
                  <BehanceIcon />
                </Icon>
              </Link>
            </Box>
          </Grid>
        </Hidden>
        <Hidden mdUp>
          <Grid item container wrap="nowrap" xs={4} justify="flex-end" alignItems="flex-end">
            <Link href="#contatos" color="textPrimary">
              <Icon>
                <MenuIcon />
              </Icon>
            </Link>
          </Grid>
        </Hidden>
      </Grid>
    </Toolbar>
  </AppBar>
);

export default Header;

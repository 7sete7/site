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
import Slide from "@material-ui/core/Slide";
import BehanceIcon from "./Icons/Behance";
import MenuIcon from "@material-ui/icons/Menu";

import { connect } from "react-redux";
import replace from "lodash/replace";

const Header = ({ metadata = {}, contact = {}, loading }) => (
  <Slide direction="down" in={!loading} mountOnEnter unmountOnExit>
    <AppBar position="static" color="inherit">
      <Toolbar disableGutters={false} style={{ zIndex: 150 }}>
        <Grid container>
          {/* Logo */}
          <Hidden smDown>
            <Grid item container md={4} justify="center">
              <Typography variant="h4" color="inherit" noWrap>
                {metadata.logo}
              </Typography>
            </Grid>
          </Hidden>
          <Hidden mdUp>
            <Grid item container wrap="nowrap" xs={8} alignItems="center">
              <Typography variant="h4" color="inherit" noWrap>
                {metadata.logo ? metadata.logo.slice(0, 1) : "E"}
              </Typography>
            </Grid>
          </Hidden>

          <Hidden smDown>
            <Grid item md={4}>&nbsp;</Grid>
          </Hidden>

          {/* Icons */}
          <Hidden smDown>
            <Grid item container wrap="nowrap" xs={4} justify="center">
              <Box display="flex" justifyContent="space-evenly" flexGrow="0.4" alignItems="center">
                {contact.linkedin && (
                  <Link href={contact.linkedin} target="_blank" color="textPrimary" underline="none">
                    <Icon>
                      <LinIcon />
                    </Icon>
                  </Link>
                )}

                {contact.whatsapp && (
                  <Link href={replace(contact.whatsapp, /\D/i, "")} target="_blank" color="textPrimary" underline="none">
                    <Icon>
                      <WhatsIcon />
                    </Icon>
                  </Link>
                )}

                {contact.github && (
                  <Link href={contact.github} target="_blank" color="textPrimary" underline="none">
                    <Icon>
                      <GitIcon />
                    </Icon>
                  </Link>
                )}

                {contact.behance && (
                  <Link href={contact.behance} target="_blank" color="textPrimary" underline="none">
                    <Icon>
                      <BehanceIcon />
                    </Icon>
                  </Link>
                )}
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
  </Slide>
);

export default connect(state => ({ metadata: state.home?.metadata, contact: state.home?.contact, loading: state.home?.loading }))(Header);

import React from "react";
import map from "lodash/map";

import Button from "@material-ui/core/Button";
import Container from "@material-ui/core/Container";
import Typography from "@material-ui/core/Typography";
import Box from "@material-ui/core/Box";
import Grid from "@material-ui/core/Grid";

import Icon from "@material-ui/core/Icon";
import GitIcon from "@material-ui/icons/GitHub";
import LinIcon from "@material-ui/icons/LinkedIn";
import WhatsIcon from "@material-ui/icons/WhatsApp";
import MailIcon from "@material-ui/icons/MailOutline";

import { getData } from "./homeReducer";
import { useSelector, useDispatch } from "react-redux";

import Hero from "../../components/Hero";
import LongCard from "../../components/LongCard";
import WavyBox from "../../components/WavyBox";

export default function Home() {
  const { projects, posts } = useSelector(getData);

  const dispatch = useDispatch();

  return (
    <div>
      <Container maxWidth="lg">
        <Hero />
        <Box mt={5}>
          <Typography variant="h4" paragraph gutterBottom>
            Meus projetos principais
          </Typography>
          {map(projects, React.createFactory(LongCard))}
        </Box>
      </Container>
      <WavyBox />
      <Container maxWidth="lg">
        <Box mt={8}>
          <Typography variant="h4" paragraph gutterBottom>
            Meus posts principais
          </Typography>
          {map(posts, React.createFactory(LongCard))}
        </Box>
      </Container>
      <Box mt={5} py={3} bgcolor="#EEF0FF">
        <Container maxWidth="lg">
          <Box display="flex">
            <div style={{ flexGrow: 1 }}>
              <Typography variant="h5">Eduardo.viva</Typography>
              <Typography variant="h5" color="secondary">
                UX / UI / Product Designer
              </Typography>
            </div>
            <div style={{ flexGrow: 1 }}>
              <Typography>Vamos conversar</Typography>
              <Box pl={2}>
                <Box display="flex" mb={1}>
                  <Icon style={{ flexGrow: 0.1 }}>
                    <LinIcon />
                  </Icon>
                  <Typography>linkedi.com/in/edu-viva</Typography>
                </Box>
                <Box display="flex" mb={1}>
                  <Icon style={{ flexGrow: 0.1 }}>
                    <WhatsIcon />
                  </Icon>
                  <Typography>(51) 99991-8720</Typography>
                </Box>
                <Box display="flex" mb={1}>
                  <Icon style={{ flexGrow: 0.1 }}>
                    <MailIcon />
                  </Icon>
                  <Typography>eduardovivaa@gmail.com</Typography>
                </Box>
                <Box display="flex" mb={1}>
                  <Icon style={{ flexGrow: 0.1 }}>
                    <GitIcon />
                  </Icon>
                  <Typography>behance.net/eduviva</Typography>
                </Box>
              </Box>
            </div>
          </Box>
        </Container>
      </Box>
    </div>
  );
}

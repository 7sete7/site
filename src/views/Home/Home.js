import React, { useMemo } from "react";
import map from "lodash/map";

import Container from "@material-ui/core/Container";
import Typography from "@material-ui/core/Typography";
import Box from "@material-ui/core/Box";
import Link from "@material-ui/core/Link";

import Icon from "@material-ui/core/Icon";
import MailIcon from "@material-ui/icons/Mail";
import LinIcon from "@material-ui/icons/LinkedIn";
import WhatsIcon from "@material-ui/icons/WhatsApp";
import BehanceIcon from "../../components/Icons/Behance";

import { getData } from "./homeReducer";
import { useSelector } from "react-redux";

import Hero from "../../components/Hero";
import LongCard from "../../components/LongCard";
import CompactCard from "../../components/CompactCard";
import WavyBox from "../../components/WavyBox";

import withStyles from "@material-ui/core/styles/withStyles";
import useMediaQuery from "@material-ui/core/useMediaQuery";

const Home = ({ classes }) => {
  const { projects, posts } = useSelector(getData);
  const isXSmall = useMediaQuery(theme => theme.breakpoints.down("xs"));

  const CardComponent = useMemo(() => (isXSmall ? CompactCard : LongCard), [isXSmall]);

  return (
    <div>
      <Container maxWidth="lg">
        <Box mt={6}>
          <Hero />
        </Box>
        <Box my={18}>
          <Typography id="projetos" variant="h4" paragraph gutterBottom>
            Meus projetos principais
          </Typography>
          {map(projects, project => (
            <CardComponent key={project.title} {...project} linkName="Ver projeto" />
          ))}
        </Box>
      </Container>
      <WavyBox />
      <Container maxWidth="lg">
        <Box mt={13}>
          <Typography id="posts" variant="h4" paragraph gutterBottom>
            Meus posts principais
          </Typography>
          {map(posts, post => (
            <CardComponent key={post.title} {...post} linkName="Ver post" />
          ))}
        </Box>
      </Container>
      <Box id="contatos" mt={13} py={3} bgcolor="#EEF0FF">
        <Container maxWidth="lg">
          <Box display="flex" flexWrap="wrap">
            <div style={{ flexGrow: 1, paddingBottom: 16 }}>
              <Typography variant="h5" gutterBottom>
                Eduardo.viva
              </Typography>
              <Typography color="secondary">
                <b>UX / UI / Product Designer</b>
              </Typography>
            </div>
            <div style={{ flexGrow: 1 }}>
              <Typography paragraph>
                <b>Vamos conversar</b>
              </Typography>
              <Box pl={2}>
                <Box display="flex" alignItems="center" mb={2}>
                  <Icon className={classes.icon}>
                    <LinIcon />
                  </Icon>
                  <Link href="//linkedin.com/in/edu-viva" target="_blank" color="textPrimary" underline="none">
                    linkedin.com/in/edu-viva
                  </Link>
                </Box>
                <Box display="flex" alignItems="center" mb={2}>
                  <Icon className={classes.icon}>
                    <WhatsIcon />
                  </Icon>
                  <Link href="//wa.me/5551999918720" target="_blank" color="textPrimary" underline="none">
                    (51) 99991-8720
                  </Link>
                </Box>
                <Box display="flex" alignItems="center" mb={2}>
                  <Icon className={classes.icon}>
                    <MailIcon />
                  </Icon>
                  <Typography color="textPrimary">eduardovivaa@gmail.com</Typography>
                </Box>
                <Box display="flex" alignItems="center" mb={2}>
                  <Icon className={classes.icon}>
                    <BehanceIcon />
                  </Icon>
                  <Link href="//behance.net/eduviva" target="_blank" color="textPrimary" underline="none">
                    behance.net/eduviva
                  </Link>
                </Box>
              </Box>
            </div>
          </Box>
        </Container>
      </Box>
    </div>
  );
};

const style = theme => ({
  icon: {
    width: 60,
    maxWidth: "20vw",
  },
});

export default withStyles(style)(Home);

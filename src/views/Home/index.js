import React, { useMemo, useEffect } from "react";
import map from "lodash/map";
import replace from "lodash/replace";
import { useDispatch } from "react-redux";

import Container from "@material-ui/core/Container";
import Typography from "@material-ui/core/Typography";
import Box from "@material-ui/core/Box";
import Link from "@material-ui/core/Link";

import Icon from "@material-ui/core/Icon";
import MailIcon from "@material-ui/icons/Mail";
import LinIcon from "@material-ui/icons/LinkedIn";
import WhatsIcon from "@material-ui/icons/WhatsApp";
import BehanceIcon from "../../components/Icons/Behance";

import { getData } from "../../store/homeReducer";
import { useSelector } from "react-redux";

import Hero from "../../components/Hero";
import LongCard from "../../components/LongCard";
import CompactCard from "../../components/CompactCard";
import WavyBox from "../../components/WavyBox";

import withStyles from "@material-ui/core/styles/withStyles";
import useMediaQuery from "@material-ui/core/useMediaQuery";

import fetchData from "../../DAL/fetchAdminData";
import { populate } from "../../store/homeReducer";

const Home = ({ classes }) => {
  const dispatch = useDispatch();

  const { projects, posts, metadata = {}, contact = {} } = useSelector(getData);
  const isXSmall = useMediaQuery(theme => theme.breakpoints.down("xs"));

  const CardComponent = useMemo(() => (isXSmall ? CompactCard : LongCard), [isXSmall]);

  useEffect(() => {
    fetchData().then(data => dispatch(populate(data)));
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

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
          {map(projects?.data, project => (
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
          {map(posts?.data, post => (
            <CardComponent key={post.title} {...post} linkName="Ver post" />
          ))}
        </Box>
      </Container>
      <Box id="contatos" mt={13} py={3} bgcolor="#EEF0FF">
        <Container maxWidth="lg">
          <Box display="flex" flexWrap="wrap">
            <div style={{ flexGrow: 1, paddingBottom: 16 }}>
              <Typography variant="h5" gutterBottom>
                {metadata.logo}
              </Typography>
              <Typography color="secondary">
                <b>{metadata.role}</b>
              </Typography>
            </div>
            <div style={{ flexGrow: 1 }}>
              <Typography paragraph>
                <b>Vamos conversar</b>
              </Typography>
              <Box pl={2}>
                {contact.linkedin && (
                  <Box display="flex" alignItems="center" mb={2}>
                    <Icon className={classes.icon}>
                      <LinIcon />
                    </Icon>
                    <Link href={contact.linkedin} target="_blank" color="textPrimary" underline="none">
                      {contact.linkedin}
                    </Link>
                  </Box>
                )}
                {contact.whatsapp && (
                  <Box display="flex" alignItems="center" mb={2}>
                    <Icon className={classes.icon}>
                      <WhatsIcon />
                    </Icon>
                    <Link href={replace(contact.whatsapp, /\D/i, '')} target="_blank" color="textPrimary" underline="none">
                      {contact.whatsapp}
                    </Link>
                  </Box>
                )}
                {contact.email && (
                  <Box display="flex" alignItems="center" mb={2}>
                    <Icon className={classes.icon}>
                      <MailIcon />
                    </Icon>
                    <Typography color="textPrimary">{contact.email}</Typography>
                  </Box>
                )}
                {contact.behance && (
                  <Box display="flex" alignItems="center" mb={2}>
                    <Icon className={classes.icon}>
                      <BehanceIcon />
                    </Icon>
                    <Link href={contact.behance} target="_blank" color="textPrimary" underline="none">
                      {contact.behance}
                    </Link>
                  </Box>
                )}
              </Box>
            </div>
          </Box>
        </Container>
      </Box>
    </div>
  );
};

const style = {
  icon: {
    width: 60,
    maxWidth: "20vw",
  },
};

export default withStyles(style)(Home);

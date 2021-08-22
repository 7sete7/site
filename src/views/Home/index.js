import React, { useMemo, useEffect } from "react";
import map from "lodash/map";
import replace from "lodash/replace";
import { useDispatch } from "react-redux";

import Container from "@material-ui/core/Container";
import Typography from "@material-ui/core/Typography";
import Box from "@material-ui/core/Box";
import Link from "@material-ui/core/Link";
import Skeleton from "@material-ui/lab/Skeleton";
import Slide from "@material-ui/core/Slide";

import Icon from "@material-ui/core/Icon";
import MailIcon from "@material-ui/icons/Mail";
import LinIcon from "@material-ui/icons/LinkedIn";
import WhatsIcon from "@material-ui/icons/WhatsApp";
import BehanceIcon from "../../components/Icons/Behance";

import { getData } from "../../store/homeReducer";
import { useSelector } from "react-redux";

import Header from "../../components/Header";
import Hero from "../../components/Hero";
import LongCard from "../../components/LongCard";
import CompactCard from "../../components/CompactCard";
import WavyBox from "../../components/WavyBox";
import BookShelf from "../../components/BookShelf";

import withStyles from "@material-ui/core/styles/withStyles";
import useMediaQuery from "@material-ui/core/useMediaQuery";

import fetchData from "../../DAL/fetchAdminData";
import { populate } from "../../store/homeReducer";

const Home = ({ classes }) => {
  const dispatch = useDispatch();

  const { projects, posts, metadata = {}, contact = {}, books, loading } = useSelector(getData);
  const isXSmall = useMediaQuery(theme => theme.breakpoints.down("xs"));

  const CardComponent = useMemo(() => (isXSmall ? CompactCard : LongCard), [isXSmall]);

  useEffect(() => {
    fetchData().then(data => dispatch(populate(data)));
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <>
      <Header />
      <div>
        <Container maxWidth="lg">
          <Box mt={6}>
            <Hero />
          </Box>
          <Box my={18}>
            <Typography id="projetos" variant="h4" paragraph gutterBottom>
              Meus projetos principais
            </Typography>
            {loading && <Skeleton variant="rect" width="100%" height={isXSmall ? 300 : 200} animation="wave" />}

            <Slide direction="right" in={!loading} mountOnEnter unmountOnExit>
              <div>
                {map(projects?.data, project => (
                  <CardComponent key={project.title} {...project} linkName="Ver projeto" />
                ))}
              </div>
            </Slide>
          </Box>
        </Container>
        <WavyBox />
        <Container maxWidth="lg">
          <Box mt={13}>
            <Typography id="posts" variant="h4" paragraph gutterBottom>
              Meus posts principais
            </Typography>
            {loading && <Skeleton variant="rect" width="100%" height={isXSmall ? 300 : 200} animation="wave" />}

            <Slide direction="right" in={!loading} mountOnEnter unmountOnExit>
              <div>
                {map(posts?.data, post => (
                  <CardComponent key={post.title} {...post} linkName="Ver post" />
                ))}
              </div>
            </Slide>
          </Box>
        </Container>
        {books?.data?.length > 0 ? (
          <Box id="estante" mt={5}>
            <Container maxWidth="lg">
              <Typography id="projetos" variant="h4" paragraph gutterBottom>
                Minha estante de livros
              </Typography>
              <BookShelf />
            </Container>
          </Box>
        ) : null}
        <Box id="contatos" mt={13} py={3} bgcolor="#EEF0FF">
          <Container maxWidth="lg">
            <Box display="flex" flexWrap="wrap">
              <div style={{ flexGrow: 1, paddingBottom: 16 }}>
                <Typography variant="h5" gutterBottom>
                  {metadata.logo ?? <Skeleton width={150} animation="wave" />}
                </Typography>
                <Typography color="secondary">
                  <b>{metadata.role ?? <Skeleton width={250} height={30} animation="wave" />}</b>
                </Typography>
              </div>
              <div style={{ flexGrow: 1 }}>
                <Typography paragraph>
                  <b>Vamos conversar</b>
                </Typography>
                <Box pl={2}>
                  {loading && map(Array(5).fill(0), (_, i) => <Skeleton key={i} variant="text" width={250} height={30} animation="wave" />)}
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
                      <Link href={replace(contact.whatsapp, /\D/i, "")} target="_blank" color="textPrimary" underline="none">
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
    </>
  );
};

const style = {
  icon: {
    width: 60,
    maxWidth: "20vw",
  },
};

export default withStyles(style)(Home);

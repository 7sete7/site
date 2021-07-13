import React, { useCallback, useMemo } from "react";
import chunk from "lodash/chunk";

import Box from "@material-ui/core/Box";
import Typography from "@material-ui/core/Typography";
import Grid from "@material-ui/core/Grid";
import Container from "@material-ui/core/Container";

import withStyles from "@material-ui/core/styles/withStyles";
import useMediaQuery from "@material-ui/core/useMediaQuery";

import { CurvedLine, BoxThingy } from "./svgs";

import { getData } from "../../store/homeReducer";
import { useSelector } from "react-redux";

const WavyBox = ({ classes }) => {
  const { studies } = useSelector(getData);

  const isMobile = useMediaQuery(theme => theme.breakpoints.down("sm"));
  const variant = useCallback(def => (isMobile ? "caption" : def), [isMobile]);

  const data = useMemo(() => (studies?.data ? chunk(studies.data, 2) : []), [studies]);

  const BoxyFormation = ({ group: [study1, study2] }) => (
    <Box position="relative" width="100%" py={3} px={2}>
      <Box display="flex" flexDirection="column" alignItems="center">
        <Box display="flex" p={1} minWidth="55%" className={classes.boxes}>
          <BoxThingy height="100px" />
          <div style={{ marginLeft: 8 }}>
            <Typography variant={variant("h5")} noWrap>
              <b>{study1.title}</b>
            </Typography>
            <Typography variant="body2">{study1.course}</Typography>
            <Typography variant="caption">{study1.start} - {study1.end}</Typography>
          </div>
        </Box>
        {study2 && (
          <Box display="flex" p={1} mt={3} textAlign="right" minWidth="55%" className={classes.boxes}>
            <div style={{ marginRight: 8 }}>
              <Typography variant={variant("h5")} noWrap>
                <b>{study2.title}</b>
              </Typography>
              <Typography variant="body2">{study2.course}</Typography>
              <Typography variant="caption">{study2.start} - {study2.end}</Typography>
            </div>
            <BoxThingy height="100px" />
          </Box>
        )}
      </Box>
    </Box>
  );

  const LineFormation = ({ group: [study1, study2 = {}] }) => (
    <Box position="relative" width="100%" py={3} px={2}>
      <Box display="flex" flexDirection="column" alignItems="center" position="relative" maxWidth={600}>
        <CurvedLine height="100%" position="absolute" maxWidth="100%" />
        <Box height={116} p={1} pt={3} minWidth="50%" className={classes.curvedLineTop}>
          <Typography variant={variant("h5")} noWrap>
            <b>{study1.title}</b>
          </Typography>
          <Typography variant="body2">{study1.course}</Typography>
          <Typography variant="caption">{study1.start} - {study1.end}</Typography>
        </Box>
        <Box height={116} p={1} mt={3} pr={5} textAlign="right" minWidth="50%">
          <Typography variant={variant("h5")} noWrap>
            <b>{study2.title}</b>
          </Typography>
          <Typography variant="body2">{study2.course}</Typography>
          <Typography variant="caption">{study2.start} - {study2.end}</Typography>
        </Box>
      </Box>
    </Box>
  );

  return (
    <Box className={classes.container}>
      <Container maxWidth="lg">
        <Grid container>
          {data.map((group, idx) => {
            const Section = idx % 2 === 0 ? BoxyFormation : LineFormation;
            const isLast = idx === data.length - 1;
            const isFullRow = isLast && data.length % 2 !== 0;

            return (
              <Grid item xs={12} sm={isFullRow ? 12 : 6} key={idx}>
                <Section group={group} />
              </Grid>
            );
          })}
        </Grid>
      </Container>
    </Box>
  );
};

const style = theme => ({
  container: {
    marginTop: theme.spacing(5),
    backgroundColor: "#F6F6F6",
  },
  curvedLineTop: {
    [theme.breakpoints.down("lg")]: {
      width: "70%",
      marginLeft: "10%",
    },
    [theme.breakpoints.up("lg")]: {
      paddingLeft: theme.spacing(5),
    },
  },
  boxes: {
    [theme.breakpoints.down("md")]: {
      width: "90%",
    },
  },
});

export default withStyles(style)(WavyBox);

import React, { useRef } from "react";
import ReactDOM from "react-dom";
import Button from "@material-ui/core/Button";
import Typography from "@material-ui/core/Typography";
import Box from "@material-ui/core/Box";
import Grid from "@material-ui/core/Grid";
import Skeleton from "@material-ui/lab/Skeleton";
import Slide from "@material-ui/core/Slide";

import ExternalIcon from "@material-ui/icons/LaunchRounded";
import withStyles from "@material-ui/core/styles/withStyles";

import { getData } from "../store/homeReducer";
import { useSelector } from "react-redux";

const Hero = ({ classes }) => {
  const { metadata = {}, loading } = useSelector(getData);
  const ref = useRef();

  return (
    <Box display="flex">
      <Box py={3} className={classes.container}>
        {loading && (
          <>
            <Skeleton variant="text" width={150} animation="wave" />
            <Skeleton variant="text" width={300} animation="wave" />
            <br />
            <Skeleton variant="rect" width={500} height={100} style={{ maxWidth: "87vw" }} animation="wave" />
            <br />
          </>
        )}

        <Slide direction="right" in={!loading} mountOnEnter unmountOnExit>
          <div>
            <Typography color="secondary" gutterBottom>
              <b>{metadata.role}</b>
            </Typography>
            <Typography color="textPrimary" variant="h3" style={{ marginBottom: -15 }}>
              Olá
            </Typography>
            <Typography color="textPrimary" variant="h3" style={{ fontWeight: 300 }} paragraph>
              meu nome é{" "}
              <Typography color="primary" variant="h3" component="span">
                <b>{metadata.name}</b>
              </Typography>
            </Typography>
            <Typography color="textPrimary" style={{ marginTop: 32 }} paragraph>
              <div dangerouslySetInnerHTML={{ __html: metadata.description }} style={{ display: "contents" }} />
            </Typography>
          </div>
        </Slide>

        <Grid container spacing={2}>
          <Grid item xs={12} sm={4}>
            <Button color="secondary" variant="contained" fullWidth disableElevation style={{ minWidth: 200 }}>
              <Typography variant="body2">
                <b>Meus projetos</b>
              </Typography>
            </Button>
          </Grid>

          {metadata.btnTitle && (
            <Grid item xs={12} sm={4}>
              <Button
                color="primary"
                variant="contained"
                target="_blank"
                endIcon={<ExternalIcon />}
                fullWidth
                disableElevation
                href={metadata.btnLink}>
                <Typography variant="body2">
                  <b>{metadata.btnTitle}</b>
                </Typography>
              </Button>
            </Grid>
          )}
        </Grid>
      </Box>
      <Box flexGrow={1} className={classes.boxContainer}>
        <Box width={500} height={500} bgcolor="auxiliar.light" className={classes.boxes}>
          <Box width="94%" height="94%" bgcolor="secondary.light" className={classes.boxes}>
            <Box width="95%" height="95%" bgcolor="primary.light" className={classes.boxes}>
              <Image renderRef={ref} url={metadata.pic} />
            </Box>
          </Box>
        </Box>
        <Box width={500} height={500} bgcolor="auxiliar.light" className={classes.boxes}>
          <Box width="94%" height="94%" bgcolor="secondary.light" className={classes.boxes} style={{ position: "relative" }}>
            <Box ref={ref} width="95%" height="95%" bgcolor="primary.light" className={classes.boxes}></Box>
          </Box>
        </Box>
      </Box>
    </Box>
  );
};

const style = theme => ({
  container: {
    maxWidth: "55%",
    [theme.breakpoints.down("sm")]: {
      maxWidth: "unset",
    },
  },
  boxContainer: {
    zIndex: -5,
    [theme.breakpoints.down("sm")]: {
      display: "none",
    },
    "& > .MuiBox-root": {
      "&:nth-of-type(1)": {
        transform: "rotate(45deg)",
      },
      top: -10,
      right: -130,
      position: "absolute",
    },
  },
  boxes: {
    borderRadius: 80,
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    "&.image": {
      transform: "rotate(45deg)",
      overflow: "hidden",
    },
  },
  image: {
    position: "absolute",
    transform: "rotate(-45deg) translate(-130px)",
  },
});

const Image = withStyles(style)(({ renderRef, classes, url }) => {
  const Boxe = () => (
    <Box width="95%" height="95%" bgcolor="primary.main" className={`${classes.boxes} image`}>
      <img src={url} alt="" className={classes.image} />
    </Box>
  );
  return renderRef?.current ? ReactDOM.createPortal(<Boxe />, renderRef.current) : <Boxe />;
});

export default withStyles(style)(Hero);

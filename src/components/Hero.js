import React from "react";
import ReactDOM from "react-dom";
import Button from "@material-ui/core/Button";
import Typography from "@material-ui/core/Typography";
import Box from "@material-ui/core/Box";
import Grid from "@material-ui/core/Grid";

import ExternalIcon from "@material-ui/icons/LaunchRounded";
import withStyles from "@material-ui/core/styles/withStyles";

const Hero = ({ classes }) => {
  const ref = React.useRef();
  return(
  <Box display="flex">
    <Box py={3} className={classes.container}>
      <Typography color="textSecondary">UX / UI / Product Designer</Typography>
      <Typography color="textPrimary" variant="h5" gutterBottom>
        Olá
      </Typography>
      <Typography color="textPrimary" paragraph>
        meu nome é Eduardo
      </Typography>
      <Typography color="textPrimary" paragraph>
        Meu objetivo é melhorar o mundo entregando experiências melhores através do design. Serei referência no meu
        trabalho, por isso tenho a meta de alcançar Design Lead em 5 anos. Também faço projetos pessoais de dev por
        hobby.
      </Typography>

      <Grid container spacing={2}>
        <Grid item xs={12} sm={5}>
          <Button color="secondary" variant="contained" fullWidth>
            Meus projetos
          </Button>
        </Grid>
        <Grid item xs={12} sm={5}>
          <Button color="primary" variant="contained" endIcon={<ExternalIcon />} fullWidth>
            Currículo
          </Button>
        </Grid>
      </Grid>
    </Box>
    <Box flexGrow={1} className={classes.boxContainer}>
      <Box width={500} height={500} bgcolor="auxiliar.main" className={classes.boxes}>
        <Box width="94%" height="94%" bgcolor="secondary.main" className={classes.boxes}>
          <Box width="95%" height="95%" bgcolor="primary.main" className={classes.boxes}>
            <Image renderRef={ref} />
          </Box>
        </Box>
      </Box>
      <Box width={500} height={500} bgcolor="auxiliar.main" className={classes.boxes}>
        <Box width="94%" height="94%" bgcolor="secondary.main" className={classes.boxes}>
          <Box ref={ref} width="95%" height="95%" bgcolor="primary.main" className={classes.boxes}></Box>
        </Box>
      </Box>
    </Box>
  </Box>
)};

const style = theme => ({
  container: {
    maxWidth: "55%",
    [theme.breakpoints.down("sm")]: {
      maxWidth: "unset",
    },
  },
  boxContainer: {
    [theme.breakpoints.down("sm")]: {
      display: "none",
    },
    "& > .MuiBox-root": {
      "&:nth-of-type(1)": {
        transform: "rotate(45deg)",
      },
      top: -50,
      right: -100,
      position: "absolute",
    },
  },
  boxes: {
    borderRadius: 80,
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    "&.image": {
      backgroundImage: "url(/images/foto.png)",
      transform: "rotate(45deg)",
    },
  },
});

const Image = withStyles(style)(({ renderRef, classes = {} }) => {
  const Boxe = () => <Box width="95%" height="95%" bgcolor="primary.main" className={`${classes.boxes} image`} />;
  return renderRef && renderRef.current ? ReactDOM.createPortal(<Boxe />, renderRef.current) : <Boxe />;
});

export default withStyles(style)(Hero);

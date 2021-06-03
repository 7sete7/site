/* eslint-disable react/jsx-no-target-blank */

import React from "react";
import map from "lodash/map";

import Card from "@material-ui/core/Card";
import CardMedia from "@material-ui/core/CardMedia";
import CardContent from "@material-ui/core/CardContent";
import Button from "@material-ui/core/Button";
import Typography from "@material-ui/core/Typography";
import Box from "@material-ui/core/Box";

import withStyles from "@material-ui/core/styles/withStyles";

const LongCard = ({ image, title, description, tags, link, imageFill = "cover", linkName = "Abrir", classes }) => (
  <Card className={classes.card} variant="outlined">
    <CardMedia image={image} title="Doof" style={{ minWidth: "30%", backgroundSize: imageFill }} />
    <CardContent className={classes.cardContent}>
      <Typography variant="h5" gutterBottom>
        {title}
      </Typography>
      <Typography className="description" variant="subtitle1" paragraph>
        <div dangerouslySetInnerHTML={{ __html: description }} />
      </Typography>

      <Box display="flex" justifyContent="space-between" alignItems="flex-end" pt={1}>
        <Box display="flex">
          {map(tags, tag => (
            <Typography variant="body2" key={tag} className={classes.tag}>
              {tag}
            </Typography>
          ))}
        </Box>
        <a href={link} target="_blank" style={{ textDecoration: "none" }}>
          <Button variant="text">
            <Typography color="primary" variant="h6" style={{ textDecoration: "none", fontWeight: 600 }}>
              {linkName}
            </Typography>
          </Button>
        </a>
      </Box>
    </CardContent>
  </Card>
);

const styles = theme => ({
  card: {
    display: "flex",
    height: 200,
    "&:not(:last-child)": {
      marginBottom: theme.spacing(3),
    },
  },
  cardContent: {
    display: "flex",
    flexDirection: "column",
    flexGrow: 1,

    "& .description": {
      flexGrow: 1,
      overflow: "hidden",
    },
  },
  tag: {
    backgroundColor: theme.palette.auxiliar.main,
    padding: theme.spacing(0.5, 1),
    marginLeft: theme.spacing(0.5),
    borderRadius: 3,
  },
});

export default withStyles(styles)(LongCard);

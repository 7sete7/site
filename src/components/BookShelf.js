import React from "react";
import { connect } from "react-redux";
import map from "lodash/map";

import Grid from "@material-ui/core/Grid";
import Box from "@material-ui/core/Box";
import Typography from "@material-ui/core/Typography";
import Card from "@material-ui/core/Card";
import CardMedia from "@material-ui/core/CardMedia";
import CardContent from "@material-ui/core/CardContent";

import withStyles from "@material-ui/styles/withStyles";

const BookShelf = ({ books, classes }) =>
  books ? (
    <Grid container spacing={3}>
      {map(books, ({ id, author, image, title, current }, index) => (
        <Grid item xs={12} sm={4} key={id}>
          <Card className={`${classes.card} ${index % 2 !== 0 && classes.cardEven}`}>
            {current ? (
              <Box position="absolute" className={classes.tag} bgcolor="auxiliar.main">
                Lendo
              </Box>
            ) : null}
            <CardMedia image={image} title={title} className={classes.cardImage} />

            <CardContent>
              <Typography variant="body1" className={classes.title}>
                {title}
              </Typography>
              <Typography variant="caption" className={classes.author}>
                de {author}
              </Typography>
            </CardContent>
          </Card>
        </Grid>
      ))}
    </Grid>
  ) : null;

const style = theme => ({
  card: {
    margin: "auto",
    padding: theme.spacing(0.5),
    maxWidth: 200,
    position: "relative",
    boxShadow: "0px 8px 16px rgba(112, 112, 112, 0.25)",
  },
  cardEven: {
    background: "rgb(238, 240, 255)",
  },
  cardImage: {
    width: "40%",
    margin: "auto",
    height: 140,
    borderRadius: theme.shape.borderRadius,
    marginTop: theme.spacing(1),
  },
  title: {
    fontWeight: "bold",
  },
  author: {
    color: "#6d6d6d",
  },
  tag: {
    padding: theme.spacing(0.3),
    top: 5,
    right: "20%",
    zIndex: 3,
    borderRadius: theme.shape.borderRadius,
  },
});

export default connect(state => ({ books: state.home?.books?.data }))(withStyles(style)(BookShelf));

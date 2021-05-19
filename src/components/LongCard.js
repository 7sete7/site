import React from "react";
import map from "lodash/map";

import Card from "@material-ui/core/Card";
import CardMedia from "@material-ui/core/CardMedia";
import CardContent from "@material-ui/core/CardContent";
import Button from "@material-ui/core/Button";
import Typography from "@material-ui/core/Typography";
import Box from "@material-ui/core/Box";

import withStyles from "@material-ui/core/styles/withStyles";

const LongCard = ({ image, title, description, tags, link, imageFill = "cover", classes }) => (
  <Card style={{ display: "flex" }}>
    <CardMedia image={image} title="Doof" style={{ width: "30%", backgroundSize: imageFill }} />
    <CardContent style={{ flexGrow: 1 }}>
      <Typography variant="h5" gutterBottom>
        {title}
      </Typography>
      <Typography variant="subtitle1" paragraph>
        {description}
      </Typography>

      <Box
        display="flex"
        justifyContent="space-between"
        alignItems="flex-end"
        pt={1}
      >
        <div>
          {map(tags, (tag) => (
            <Typography className={classes.tag}>{tag}</Typography>
          ))}
        </div>
        <Button variant="text">
          <a href={link} target="_blank" style={{ textDecoration: "none" }}>
            <Typography color="primary" variant="h6" style={{ textDecoration: "none" }}>
              Ver projeto
            </Typography>
          </a>
        </Button>
      </Box>
    </CardContent>
  </Card>
);

const styles = (theme) => ({
  tag: {
    backgroundColor: "#CDEF77",
    padding: theme.spacing(0.5, 1),
    marginLeft: theme.spacing(0.5),
    borderRadius: 3
  },
});

export default withStyles(styles)(LongCard);

import React from "react";
import map from "lodash/map";

import Card from "@material-ui/core/Card";
import CardMedia from "@material-ui/core/CardMedia";
import CardHeader from "@material-ui/core/CardHeader";
import CardContent from "@material-ui/core/CardContent";
import Typography from "@material-ui/core/Typography";
import Link from "@material-ui/core/Link";

import withStyles from "@material-ui/core/styles/withStyles";

const CompactCard = ({ image, title, description, tags, link, linkName = "Ver projeto", classes }) => (
  <Card className={classes.card} variant="outlined">
    <CardHeader
      title={
        <Typography variant="body1">
          <b>{title}</b>
        </Typography>
      }
      subheader={map(tags, tag => (
        <Tag key={tag} tag={tag} />
      ))}
    />
    <CardMedia image={image} className={classes.image} />
    <CardContent className={classes.cardContent}>
      <Typography className="description" variant="subtitle1">
        {description}
      </Typography>
    </CardContent>
    <CardContent style={{ textAlign: "end" }}>
      <Link href={link}>
        <Typography variant="body1">
          <b>{linkName}</b>
        </Typography>
      </Link>
    </CardContent>
  </Card>
);

const styles = theme => ({
  card: {
    "&:not(:last-child)": {
      marginBottom: theme.spacing(3),
    },
  },
  image: {
    height: 0,
    paddingTop: "56.25%", // 16:9
  },
  cardContent: {
    maxHeight: 70,
    overflow: "hidden",
  },
  tag: {
    backgroundColor: theme.palette.auxiliar.main,
    padding: "2px 5px",
    marginRight: theme.spacing(0.5),
    borderRadius: 3,
  },
});

const Tag = withStyles(styles)(({ classes, tag }) => (
  <Typography component="span" variant="body2" key={tag} className={classes.tag}>
    {tag}
  </Typography>
));

export default withStyles(styles)(CompactCard);

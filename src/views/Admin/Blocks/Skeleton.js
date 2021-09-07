import React from "react";

import Grid from "@material-ui/core/Grid";
import Skeleton from "@material-ui/lab/Skeleton";

import Block from "./Block";

const SkeletonBlock = () => (
  <Block title="Loading...">
    <Grid container spacing={1}>
      {Array(5)
        .fill(1)
        .map((_, i) => (
          <Grid item xs={12} sm={8} key={i}>
            <Skeleton variant="text" width="100%" height={50} animation="wave" />
          </Grid>
        ))}
    </Grid>
  </Block>
);

export default SkeletonBlock;

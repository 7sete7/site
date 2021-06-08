import React from "react";

import Paper from "@material-ui/core/Paper";
import Box from "@material-ui/core/Box";
import Typography from "@material-ui/core/Typography";
import Container from "@material-ui/core/Container";
import TextField from "@material-ui/core/TextField";
import Grid from "@material-ui/core/Grid";
import _Button from "@material-ui/core/Button";

import withStyles from "@material-ui/core/styles/withStyles";

const btnStyle = theme => ({
  root: {
    padding: theme.spacing(1, 2),
    textTransform: "none",
    fontWeight: 600,
  },
});

export const Button = withStyles(btnStyle)(props => React.createElement(_Button, props, props.children));

const colorStyle = theme => ({
  root: {
    position: "relative",
    marginBottom: theme.spacing(2),
    "& input": {
      paddingRight: "25%"
    },
    "& input ~ div": {
      position: "absolute",
      right: 5,
      top: 5,
      bottom: 5,
      width: "25%",
      backgroundColor: "#000",
      borderTopRightRadius: theme.shape.borderRadius,
      borderBottomRightRadius: theme.shape.borderRadius,
    },
  },
});

export const ColorInput = withStyles(colorStyle)(props =>
  React.createElement(TextField, {
    ...props,
    InputProps: {
      endAdornment: <div></div>,
    },
  }),
);
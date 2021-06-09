import React from "react";

import TextField from "@material-ui/core/TextField";
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
      paddingRight: "25%",
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

const inputStyle = theme => ({
  root: {
    "& input": {
      padding: ({ compact }) => compact && 10,
    },
  },
});

const labelProps = { shrink: true, style: { fontWeight: 600 } };
export const TextInput = withStyles(inputStyle)(props =>
  React.createElement(TextField, { ...props, variant: "outlined", InputLabelProps: labelProps }),
);

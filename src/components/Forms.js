import React from "react";

import TextField from "@material-ui/core/TextField";
import _Button from "@material-ui/core/Button";

import withStyles from "@material-ui/core/styles/withStyles";

const btnStyle = theme => ({
  root: {
    padding: theme.spacing(.8, 2),
    minWidth: 0,
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

const SHRINK_LABEL_PROPS = { shrink: true, style: { fontWeight: 600 } };

export const ColorInput = withStyles(colorStyle)(props =>
  React.createElement(TextField, {
    variant: "outlined",
    ...props,
    value: props.value || "",
    InputProps: {
      endAdornment: <div onClick={props.onPickerClick} style={{ backgroundColor: props.value }}></div>,
    },
    InputLabelProps: SHRINK_LABEL_PROPS
  }),
);

const inputStyle = theme => ({
  root: {
    "& input": {
      padding: ({ compact, xs }) => compact ? 10 : xs ? 7 : 14,
    },
  },
});

export const TextInput = withStyles(inputStyle)(props =>
  React.createElement(TextField, { ...props, variant: "outlined", value: props.value || "", InputLabelProps: SHRINK_LABEL_PROPS }),
);

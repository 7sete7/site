import React, { useState, useCallback } from "react";
import { useDispatch } from "react-redux";
import { openSnack } from "../store/adminReducer";

import Grid from "@material-ui/core/Grid";
import { Button } from "./Forms";

import ResetIcon from "@material-ui/icons/Replay";
import CheckIcon from "@material-ui/icons/Check";
import CloseIcon from "@material-ui/icons/Close";

const ResetButton = ({ onClick, action: Action, msg = "Valores do bloco redefinidos" }) => {
  const dispatch = useDispatch();
  const [state, setState] = useState(false);

  const onReset = useCallback(() => {
    setState(false);
    "function" === typeof onClick && onClick();
    dispatch(openSnack({ msg, type: "info" }));
  }, [onClick, dispatch, msg]);

  return (
    <Grid container spacing={0}>
      <Grid item xs={state ? 5 : false}>
        {state && (
          <Button variant="text" fullWidth disableElevation disableRipple disableFocusRipple onClick={() => setState(false)}>
            <CloseIcon />
          </Button>
        )}
      </Grid>
      <Grid item xs={state ? 7 : 12}>
        {!state &&
          (Action ? (
            <Action onClick={() => setState(true)} />
          ) : (
            <Button variant="contained" color="default" fullWidth disableElevation onClick={() => setState(true)}>
              <ResetIcon />
            </Button>
          ))}

        {state && (
          <Button variant="contained" style={{ background: "#00e676", color: "#fff" }} fullWidth disableElevation onClick={onReset}>
            <CheckIcon />
          </Button>
        )}
      </Grid>
    </Grid>
  );
};

export default ResetButton;

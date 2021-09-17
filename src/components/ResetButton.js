import React, { useState, useCallback } from "react";
import { useDispatch } from "react-redux";
import { openSnack } from "../store/adminReducer";

import Grid from "@material-ui/core/Grid";
import Slide from "@material-ui/core/Grow";
import { Button } from "./Forms";

import ResetIcon from "@material-ui/icons/Replay";
import CheckIcon from "@material-ui/icons/Check";
import CloseIcon from "@material-ui/icons/Close";

const ResetButton = ({ onClick }) => {
  const dispatch = useDispatch();
  const [state, setState] = useState(false);

  const onReset = useCallback(() => {
    setState(false);
    onClick();
    dispatch(openSnack({ msg: "Valores do bloco redefinidos", type: "info" }));
  }, [onClick, dispatch]);

  return (
    <Grid container spacing={0}>
      <Grid item xs={5}>
        <Slide style={{ transformOrigin: "180 180 180" }} in={state} mountOnEnter unmountOnExit>
          <div>
            <Button variant="text" fullWidth disableElevation disableRipple disableFocusRipple onClick={() => setState(false)}>
              <CloseIcon />
            </Button>
          </div>
        </Slide>
      </Grid>
      <Grid item xs={7}>
        {!state && (
          <Button variant="contained" color="default" fullWidth disableElevation onClick={() => setState(true)}>
            <ResetIcon />
          </Button>
        )}

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

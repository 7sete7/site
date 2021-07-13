import React, { useState, useCallback, useRef } from "react";

import Box from "@material-ui/core/Box";
import Typography from "@material-ui/core/Typography";
import Grid from "@material-ui/core/Grid";
import withStyles from "@material-ui/styles/withStyles";

import Block from "./Block";
import { Button, ColorInput } from "../../../components/Forms";
import ResetButton from "../../../components/ResetButton";
import useBlock from "../../../hooks/useBlock";

const Colors = ({ classes }) => {
  const { onChange, onSave, onReset, values } = useBlock("colors");
  const [current, setCurrent] = useState();
  const colorRef = useRef();

  const onPickerClick = useCallback(
    picker => event => {
      setCurrent({ picker, anchor: event.currentTarget });
      setTimeout(() => colorRef.current.click(), 1);
    },
    [],
  );

  return (
    <Block title="Cores">
      <input
        ref={colorRef}
        type="color"
        onInput={onChange(current?.picker)}
        style={{ position: "absolute", visibility: "hidden", left: current?.anchor?.getClientRects()[0].x }}
      />
      <Grid container spacing={2}>
        <Grid item xs={12} sm={6}>
          <Typography variant="h6">Principais</Typography>
          <Box pt={2}>
            <ColorInput label="Primária" fullWidth value={values.primary} onChange={onChange("primary")} onPickerClick={onPickerClick("primary")} />
            <ColorInput
              label="Secundária"
              fullWidth
              value={values.secondary}
              onChange={onChange("secondary")}
              onPickerClick={onPickerClick("secondary")}
            />
            <ColorInput
              label="Auxiliar"
              fullWidth
              value={values.auxiliar}
              onChange={onChange("auxiliar")}
              onPickerClick={onPickerClick("auxiliar")}
            />
          </Box>
        </Grid>

        <Grid item xs={12} sm={6}>
          <Typography variant="h6">Helpers</Typography>

          <Box pt={2}>
            <ColorInput
              label="Primária"
              fullWidth
              value={values.helperPrimary}
              onChange={onChange("helperPrimary")}
              onPickerClick={onPickerClick("helperPrimary")}
            />
            <ColorInput
              label="Secundária"
              fullWidth
              value={values.helperSecondary}
              onChange={onChange("helperSecondary")}
              onPickerClick={onPickerClick("helperSecondary")}
            />
            <ColorInput
              label="Auxiliar"
              fullWidth
              value={values.helperAuxiliar}
              onChange={onChange("helperAuxiliar")}
              onPickerClick={onPickerClick("helperAuxiliar")}
            />
          </Box>
        </Grid>

        <Grid item xs={12}>
          <Grid container spacing={1} justify="flex-end">
            <Grid item xs={5} sm={4} md={3}>
              <ResetButton onClick={onReset} />
            </Grid>
            <Grid item xs={12} sm={6} md={4}>
              <Button variant="contained" color="primary" fullWidth disableElevation onClick={onSave}>
                Salvar cores
              </Button>
            </Grid>
          </Grid>
        </Grid>
      </Grid>
    </Block>
  );
};

const styles = theme => ({
  color: {
    cursor: "pointer",
    width: 25,
    height: 25,
    marginBottom: theme.spacing(1),
    "&[data-selected=true]": {
      border: "2px solid #FFF",
    },
  },
});

export default withStyles(styles)(Colors);

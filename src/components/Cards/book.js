import React, { useState, useCallback } from "react";

import Grid from "@material-ui/core/Grid";
import Card from "@material-ui/core/Card";
import CardContent from "@material-ui/core/CardContent";
import CardActions from "@material-ui/core/CardActions";
import FormControlLabel from "@material-ui/core/FormControlLabel";
import Checkbox from "@material-ui/core/Checkbox";
import Typography from "@material-ui/core/Typography";
import Button from "@material-ui/core/Button";

import { TextInput } from "../Forms";
import ResetButton from "../ResetButton";
import withStyles from "@material-ui/styles/withStyles";

const BookCard = ({ classes, id, onSave, onDelete, ...props }) => {
  const [values, setValues] = useState({ ...props, current: props.current || false });
  const onChange = useCallback(field => ({ target }) => setValues(v => ({ ...v, [field]: target.value })), []);
  const onCheck = useCallback(field => ({ target }) => setValues(v => ({ ...v, [field]: target.checked })), []);

  const onSaveClick = useCallback(() => {
    "function" === typeof onSave && onSave({ id, post: values });
  }, [onSave, values, id]);

  const onDeleteClick = useCallback(() => {
    "function" === typeof onDelete && onDelete({ id });
  }, [onDelete, id]);

  return (
    <Card className={classes.card}>
      <CardContent>
        <Grid container spacing={1}>
          <Grid item xs={12}>
            <TextInput label="Título" fullWidth value={values.title} onChange={onChange("title")} />
          </Grid>
          <Grid item xs={12}>
            <TextInput label="Autor" fullWidth value={values.author} onChange={onChange("author")} />
          </Grid>
          <Grid item xs={12}>
            <TextInput label="Link da imagem" fullWidth value={values.image} onChange={onChange("image")} />
          </Grid>

          <Grid item xs={12}>
            <FormControlLabel
              control={<Checkbox name="reading" color="primary" checked={values.current} onChange={onCheck("current")} />}
              label={<Typography variant="body2">Lendo atualmente</Typography>}
            />
          </Grid>
        </Grid>
      </CardContent>
      <CardActions>
        <Grid container>
          <Grid item xs={5}>
            <ResetButton
              onClick={onDeleteClick}
              msg="Card excluído"
              action={props => (
                <Button {...props} fullWidth variant="text" color="secondary">
                  Excluir
                </Button>
              )}
            />
          </Grid>
          <Grid item xs={7}>
            <Button fullWidth variant="contained" color="primary" disableElevation onClick={onSaveClick}>
              Salvar
            </Button>
          </Grid>
        </Grid>
      </CardActions>
    </Card>
  );
};

const styles = theme => ({
  card: {
    minWidth: "35%",
    width: "35%",
    marginRight: theme.spacing(1),
  },
});

export default withStyles(styles)(BookCard);

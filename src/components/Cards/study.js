import React, { useState, useCallback } from "react";

import Grid from "@material-ui/core/Grid";
import Card from "@material-ui/core/Card";
import CardContent from "@material-ui/core/CardContent";
import CardActions from "@material-ui/core/CardActions";
import ButtonGroup from "@material-ui/core/ButtonGroup";
import Button from "@material-ui/core/Button";

import { TextInput } from "../Forms";
import ResetButton from "../ResetButton";
import withStyles from "@material-ui/styles/withStyles";

const StudyCard = ({ classes, id, onSave, onDelete, ...props }) => {
  const [values, setValues] = useState(props);
  const onChange = useCallback(field => ({ target }) => setValues(v => ({ ...v, [field]: target.value })), []);
  const btnColor = useCallback(value => (values.type === value ? "contained" : null), [values]);

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
            <TextInput label="Título" placeholder="(Tipo - Organização)" fullWidth value={values.title} onChange={onChange("title")} />
          </Grid>
          <Grid item xs={12}>
            <TextInput label="Nome do curso" fullWidth value={values.course} onChange={onChange("course")} />
          </Grid>
          <Grid item xs={12}>
            <Grid container spacing={1}>
              <Grid item xs={6}>
                <TextInput label="Início" fullWidth compact value={values.start} onChange={onChange("start")} />
              </Grid>
              <Grid item xs={6}>
                <TextInput label="Término" fullWidth compact value={values.end} onChange={onChange("end")} />
              </Grid>
            </Grid>
          </Grid>
          <Grid item xs={12}>
            <ButtonGroup fullWidth color="primary" variant="outlined" disableElevation>
              <Button variant={btnColor("formation")} onClick={() => setValues(v => ({ ...v, type: "formation" }))}>
                Formação
              </Button>
              <Button variant={btnColor("course")} onClick={() => setValues(v => ({ ...v, type: "course" }))}>
                Curso
              </Button>
            </ButtonGroup>
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

export default withStyles(styles)(StudyCard);

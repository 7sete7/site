import React, { useState, useCallback } from "react";

import Box from "@material-ui/core/Box";
import Grid from "@material-ui/core/Grid";
import Card from "@material-ui/core/Card";
import CardContent from "@material-ui/core/CardContent";
import CardActions from "@material-ui/core/CardActions";
import ButtonGroup from "@material-ui/core/ButtonGroup";
import Button from "@material-ui/core/Button";
import withStyles from "@material-ui/styles/withStyles";

import ImageIcon from "@material-ui/icons/Image";
import LinkIcon from "@material-ui/icons/Link";
import TagIcon from "@material-ui/icons/LocalOffer";
import BlockIcon from "@material-ui/icons/Block";

import { TextInput } from "../Forms";
import TagInput from "../TagInput";
import ResetButton from "../ResetButton";

const PostCard = ({ classes, id, onSave, onDelete, ...props }) => {
  const [tab, setTab] = useState("image");
  const onTabChange = useCallback(newTab => () => setTab(newTab), []);
  const isTabActive = useCallback(value => tab === value, [tab]);
  const tabColor = useCallback(value => (isTabActive(value) ? "primary" : "secondary"), [isTabActive]);

  const [values, setValues] = useState(props);
  const onChange = useCallback(field => ({ target }) => setValues(v => ({ ...v, [field]: target.value })), []);
  const btnColor = useCallback(value => values.imageFill === value ? "contained" : null, [values]);

  const isUrl = useCallback(
    str => /(http(s)?:\/\/.)?(www\.)?[-a-zA-Z0-9@:%._+~#=]{2,256}\.[a-z]{2,6}\b([-a-zA-Z0-9@:%_+.~#?&//=]*)/g.test(str),
    [],
  );

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
            <TextInput
              label="Descrição"
              fullWidth
              multiline
              rows={3}
              placeholder="(com html)"
              value={values.description}
              onChange={onChange("description")}
            />
          </Grid>
        </Grid>
        <Grid item xs={12}>
          <Grid container spacing={0}>
            <Grid item xs={12}>
              <ButtonGroup variant="text" color="secondary" fullWidth>
                <Button variant="text" color={tabColor("image")} onClick={onTabChange("image")}>
                  <ImageIcon />
                </Button>
                <Button variant="text" color={tabColor("link")} onClick={onTabChange("link")}>
                  <LinkIcon />
                </Button>
                <Button variant="text" color={tabColor("tag")} onClick={onTabChange("tag")}>
                  <TagIcon />
                </Button>
              </ButtonGroup>
            </Grid>
            <Grid item xs={12}>
              <Box p={2} pt={4}>
                {isTabActive("image") && (
                  <Grid container spacing={1}>
                    <Grid item xs={8}>
                      <TextInput label="Link da imagem" fullWidth compact value={values.image} onChange={onChange("image")} />
                    </Grid>
                    <Grid item xs={4}>
                      <Box
                        width="100%"
                        height="100%"
                        style={{ backgroundImage: values.image ? `url(${values.image})` : null }}
                        className={classes.cardImage}>
                        {values.image && isUrl(values.image) ? " " : <BlockIcon />}
                      </Box>
                    </Grid>
                  </Grid>
                )}

                {isTabActive("link") && (
                  <Grid container spacing={1}>
                    <Grid item xs={12}>
                      <TextInput label="Link do card" fullWidth compact value={values.link} onChange={onChange("link")} />
                    </Grid>
                  </Grid>
                )}

                {isTabActive("tag") && (
                  <Grid container spacing={1}>
                    <Grid item xs={12}>
                      <TagInput initialTags={values.tags} onChange={tags => setValues(v => ({ ...v, tags }))} />
                    </Grid>
                    <Grid item xs={12}></Grid>
                  </Grid>
                )}
              </Box>
            </Grid>
          </Grid>
        </Grid>

        <Grid item xs={12}>
          <ButtonGroup fullWidth color="primary" variant="outlined" disableElevation>
            <Button variant={btnColor("cover")} onClick={() => setValues(v => ({ ...v, imageFill: "cover" }))}>
              Cover
            </Button>
            <Button variant={btnColor("contain")} onClick={() => setValues(v => ({ ...v, imageFill: "contain" }))}>
              Contain
            </Button>
          </ButtonGroup>
        </Grid>
      </CardContent>
      <CardActions>
        <Grid container spacing={1}>
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
  cardImage: {
    textAlign: "center",
    backgroundRepeat: "no-repeat",
    backgroundSize: "contain",
    backgroundPosition: "center",
  }
});

export default withStyles(styles)(PostCard);

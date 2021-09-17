import React, { useState, useEffect, useCallback } from "react";
import without from "lodash/without";

import Grid from "@material-ui/core/Grid";
import Button from "@material-ui/core/Button";
import Chip from "@material-ui/core/Chip";
import withStyles from "@material-ui/styles/withStyles";

import AddIcon from "@material-ui/icons/Add";
import { TextInput } from "./Forms";

const TagInput = ({ initialTags = [], onChange, classes }) => {
  const [text, setText] = useState("");
  const [tags, setTags] = useState(initialTags);

  const onType = useCallback(({ target }) => setText(target.value), []);
  const onAdd = useCallback(
    event => {
      event.preventDefault();
      setTags(current => current.concat(text));
      setText("");
    },
    [text, setTags],
  );

  const onDelete = useCallback(tag => () => setTags(current => without(current, tag)), [setTags]);

  useEffect(() => {
    if (tags.join() !== initialTags.join()) {
      onChange(tags);
    }
  }, [tags, initialTags, onChange]);

  return (
    <Grid container spacing={0} alignItems="center">
      <form onSubmit={onAdd} style={{ display: "contents" }}>
        <Grid item xs={10}>
          <TextInput xs value={text} onChange={onType} classes={{ root: classes.input }} />
        </Grid>
        <Grid item xs={2}>
          <Button type="submit" onClick={onAdd} variant="contained" color="primary" disableElevation className={classes.addButton} fullWidth>
            <AddIcon />
          </Button>
        </Grid>
      </form>
      <Grid item xs={12}>
        {tags.map(tag => (
          <Chip label={tag} onDelete={onDelete(tag)} className={classes.tag} />
        ))}
      </Grid>
    </Grid>
  );
};

const style = theme => ({
  addButton: {
    borderTopLeftRadius: 0,
    borderBottomLeftRadius: 0,
    height: "100%",
    minWidth: 0,
  },
  input: {
    "& fieldset": {
      borderRight: 0,
      borderTopRightRadius: 0,
      borderBottomRightRadius: 0,
    },
  },
  tag: {
    marginTop: 3,
    "&:not(:last-of-type)": {
      marginRight: 3,
    },
  },
});

export default withStyles(style)(TagInput);

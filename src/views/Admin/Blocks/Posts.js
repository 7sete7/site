import React, { useEffect, useCallback } from "react";
import map from "lodash/map";
import trimEnd from "lodash/trimEnd";
import size from "lodash/size";

import Box from "@material-ui/core/Box";
import CardHeader from "@material-ui/core/CardHeader";

import { Button as SaveButton } from "../../../components/Forms";
import PostCard from "../../../components/Cards/posts";
import Block from "./Block";
import useBlock from "../../../hooks/useBlock";

const Header = ({ onAdd, name, qtt = 0 }) => (
  <Box>
    <CardHeader
      title={`Principais ${name}`}
      titleTypographyProps={{ variant: "h6" }}
      subheader={`${qtt} ${qtt === 1 ? trimEnd(name, "s") : name}`}
      style={{ padding: 0 }}
      action={
        <SaveButton onClick={onAdd} variant="contained" color="primary" disableElevation style={{ margin: 10 }}>
          Novo Projeto
        </SaveButton>
      }
    />
  </Box>
);

const Posts = ({ name, block }) => {
  const { onChange, onSave, values } = useBlock(block);
  const onCardSave = useCallback(({ id, post }) => {
    const posts = Array.from(values.data);
    const postIdx = posts.findIndex(p => p.id === id);
    posts[postIdx] = { id, ...post };

    onChange("data")({ target: posts });
    onChange("changed")({ target: true });
  }, [values.data, onChange]);

  useEffect(() => { values?.data && values.changed && onSave() }, [values.data, values.changed]);

  const onNewClick = useCallback(() => {
    const posts = Array.from(values.data || []);
    posts.push({ id: Math.random().toString(36).slice(-10) });

    onChange("data")({ target: posts });
  }, [values.data, onChange]);

  const onCardDelete = useCallback(({ id }) => {
    const posts = Array.from(values.data || []);
    const removed = posts.filter(p => p.id !== id);

    onChange("data")({ target: removed });
    onChange("changed")({ target: true });
  }, [values.data, onChange]);

  return (
    <Block title={<Header qtt={size(values.data)} name={name} onAdd={onNewClick} />}>
      <Box display="flex" p={0.8} bgcolor="#eee" overflow="auto">
        {map(values.data, (post, idx) => (
          <PostCard key={post.title} id={post.id} {...post} onSave={onCardSave} onDelete={onCardDelete} />
        ))}
      </Box>
    </Block>
  );
};

export default Posts;

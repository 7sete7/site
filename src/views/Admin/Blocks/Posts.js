import React from "react";
import map from "lodash/map";
import trimEnd from "lodash/trimEnd";
import size from "lodash/size";

import Box from "@material-ui/core/Box";
import CardHeader from "@material-ui/core/CardHeader";

import { Button as SaveButton } from "../../../components/Forms";
import PostCard from "../../../components/Cards/post";
import Block from "./Block";

import useBlock from "../../../hooks/useBlock";
import useCardList from "../../../hooks/useCardList";

const Header = ({ onAdd, name, qtt = 0 }) => (
  <Box>
    <CardHeader
      title={`Principais ${name}`}
      titleTypographyProps={{ variant: "h6" }}
      subheader={`${qtt} ${qtt === 1 ? trimEnd(name, "s") : name}`}
      style={{ padding: 0 }}
      action={
        <SaveButton onClick={onAdd} variant="contained" color="primary" disableElevation style={{ margin: 10 }}>
          Novo {trimEnd(name, "s")}
        </SaveButton>
      }
    />
  </Box>
);

const Posts = ({ name, block }) => {
  const { onChange, onSave, values } = useBlock(block);
  const { onCardDelete, onCardSave, onNewCard } = useCardList({ onChange, onSave, values });

  return (
    <Block title={<Header qtt={size(values.data)} name={name} onAdd={onNewCard} />}>
      <Box display="flex" p={0.8} bgcolor="#eee" overflow="auto">
        {map(values.data, (post, idx) => (
          <PostCard key={post.id} id={post.id} {...post} onSave={onCardSave} onDelete={onCardDelete} />
        ))}
      </Box>
    </Block>
  );
};

export default Posts;

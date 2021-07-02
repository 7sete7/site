import React from "react";
import map from "lodash/map";

import Box from "@material-ui/core/Box";
import CardHeader from "@material-ui/core/CardHeader";

import { Button as SaveButton } from "../../../components/Forms";
import BookCard from "../../../components/Cards/book";
import Block from "./Block";

import useBlock from "../../../hooks/useBlock";
import useCardList from "../../../hooks/useCardList";

const Header = ({ onAdd }) => (
  <Box>
    <CardHeader
      title="Livros"
      subheader={<>&nbsp;</>}
      titleTypographyProps={{ variant: "h6" }}
      style={{ padding: 0 }}
      action={
        <SaveButton variant="contained" color="primary" onClick={onAdd} disableElevation style={{ margin: 10 }}>
          Adcionar livro
        </SaveButton>
      }
    />
  </Box>
);

const Books = () => {
  const { onChange, onSave, values } = useBlock("books");
  const { onCardDelete, onCardSave, onNewCard } = useCardList({ onChange, onSave, values });

  return (
    <Block title={<Header onAdd={onNewCard} />}>
      <Box display="flex" p={0.8} bgcolor="#eee" overflow="auto">
        {map(values.data, (book, idx) => (
          <BookCard key={book.id} id={book.id} {...book} onSave={onCardSave} onDelete={onCardDelete} />
        ))}
      </Box>
    </Block>
  );
};

export default Books;

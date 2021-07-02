import React from "react";
import map from "lodash/map";

import Box from "@material-ui/core/Box";
import CardHeader from "@material-ui/core/CardHeader";

import { Button as SaveButton } from "../../../components/Forms";
import StudyCard from "../../../components/Cards/study";
import Block from "./Block";

import useBlock from "../../../hooks/useBlock";
import useCardList from "../../../hooks/useCardList";

const Header = ({ onAdd }) => (
  <Box>
    <CardHeader
      title="Estudos"
      subheader={<>&nbsp;</>}
      titleTypographyProps={{ variant: "h6" }}
      style={{ padding: 0 }}
      action={
        <SaveButton variant="contained" color="primary" disableElevation style={{ margin: 10 }} onClick={onAdd}>
          Adcionar estudo
        </SaveButton>
      }
    />
  </Box>
);

const Studies = () => {
  const { onChange, onSave, values } = useBlock("studies");
  const { onCardDelete, onCardSave, onNewCard } = useCardList({ onChange, onSave, values });

  return (
    <Block title={<Header onAdd={onNewCard} />}>
      <Box display="flex" p={0.8} bgcolor="#eee" overflow="auto">
        {map(values.data, (study, idx) => (
          <StudyCard key={study.id} id={study.id} {...study} onSave={onCardSave} onDelete={onCardDelete} />
        ))}
      </Box>
    </Block>
  );
};

export default Studies;

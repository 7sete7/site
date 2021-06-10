import React from "react";

import Box from "@material-ui/core/Box";
import Container from "@material-ui/core/Container";

import { MetaBlock, ContactBlock, ColorsBlock, PostsBlock, StudiesBlock } from "./Blocks";
import withStyles from "@material-ui/core/styles/withStyles";

const Admin = () => {
  return (
    <Box py={5} bgcolor="#F4F6F8">
      <Container maxWidth="md">
        <MetaBlock />

        <ContactBlock />

        <ColorsBlock />

        <PostsBlock />
        <PostsBlock />

        <StudiesBlock />
      </Container>
    </Box>
  );
};

export default Admin;

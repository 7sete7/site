import React, { useEffect } from "react";

import Box from "@material-ui/core/Box";
import Container from "@material-ui/core/Container";

import { MetaBlock, ContactBlock, ColorsBlock, PostsBlock, StudiesBlock, BooksBlock } from "./Blocks";

import { useDispatch } from "react-redux";
import { populate } from "../../store/adminReducer";
import fetchAdminData from "../../DAL/fetchAdminData";

const Admin = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    fetchAdminData().then(data => dispatch(populate(data)));
  }, [dispatch]);

  return (
    <Box py={5} bgcolor="#F4F6F8">
      <Container maxWidth="md">
        <MetaBlock />

        <ContactBlock />

        <ColorsBlock />

        <PostsBlock />
        <PostsBlock />

        <StudiesBlock />

        <BooksBlock />
      </Container>
    </Box>
  );
};

export default Admin;

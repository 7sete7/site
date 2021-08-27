import React, { useEffect } from "react";

import Box from "@material-ui/core/Box";
import Container from "@material-ui/core/Container";

import { MetaBlock, ContactBlock, ColorsBlock, PostsBlock, StudiesBlock, BooksBlock } from "./Blocks";

import { useDispatch, useSelector } from "react-redux";
import { populate, getUser, logged, getBlockData } from "../../store/adminReducer";
import fetchAdminData from "../../DAL/fetchAdminData";
import authInfo from "../../DAL/loginInfo";

const Admin = () => {
  const dispatch = useDispatch();
  const user = useSelector(getUser);
  const data = useSelector(getBlockData("metadata"));

  useEffect(() => {
    if (user == null) {
      const toLogin = () => window.location.pathname = window.location.pathname.replace("/admin", "/admin/login");

      authInfo()
        .then(user => user == null ? toLogin() : dispatch(logged(user)));
    }

    if (data == null) fetchAdminData().then(data => dispatch(populate(data)));
  }, [dispatch]);

  return (
    <Box py={5} bgcolor="#F4F6F8">
      <Container maxWidth="md">
        <MetaBlock />

        <ContactBlock />

        <ColorsBlock />

        <PostsBlock name="projetos" block="projects" />
        <PostsBlock name="posts" block="posts" />

        <StudiesBlock />

        <BooksBlock />
      </Container>
    </Box>
  );
};

export default Admin;

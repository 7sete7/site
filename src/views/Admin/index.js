import React, { useEffect } from "react";

import Box from "@material-ui/core/Box";
import Container from "@material-ui/core/Container";
import Slide from "@material-ui/core/Slide";

import { MetaBlock, ContactBlock, ColorsBlock, PostsBlock, StudiesBlock, BooksBlock, SkeletonBlock } from "./Blocks";

import { useDispatch, useSelector } from "react-redux";
import { populate, getUser, logged, getData } from "../../store/adminReducer";
import fetchAdminData from "../../DAL/fetchAdminData";
import authInfo from "../../DAL/loginInfo";

const Admin = () => {
  const dispatch = useDispatch();
  const user = useSelector(getUser);
  const { loading, metadata: data } = useSelector(getData);

  // user & data not on dependencies because this is a 'componentDidMount' effect
  useEffect(() => {
    if (user == null) {
      const toLogin = () => (window.location.pathname = window.location.pathname.replace("/admin", "/admin/login"));

      authInfo().then(user => (user == null ? toLogin() : dispatch(logged(user))));
    }

    if (data == null) fetchAdminData().then(data => dispatch(populate(data)));
    //eslint-disable-next-line
  }, [dispatch]);

  return (
    <Box minHeight="100%" py={5} bgcolor="#F4F6F8">
      <Container maxWidth="md">
        {loading && <SkeletonBlock />}

        <Slide direction="right" in={!loading} mountOnEnter unmountOnExit>
          <div>
            <MetaBlock />

            <ContactBlock />

            <ColorsBlock />

            <PostsBlock name="projetos" block="projects" />
            <PostsBlock name="posts" block="posts" />

            <StudiesBlock />

            <BooksBlock />
          </div>
        </Slide>
      </Container>
    </Box>
  );
};

export default Admin;

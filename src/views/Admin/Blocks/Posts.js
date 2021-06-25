import React, { useState, useCallback } from "react";

import Box from "@material-ui/core/Box";
import Grid from "@material-ui/core/Grid";
import CardHeader from "@material-ui/core/CardHeader";
import Card from "@material-ui/core/Card";
import CardContent from "@material-ui/core/CardContent";
import CardActions from "@material-ui/core/CardActions";
import ButtonGroup from "@material-ui/core/ButtonGroup";
import Button from "@material-ui/core/Button";

import PreviewIcon from "@material-ui/icons/Visibility";
import ImageIcon from "@material-ui/icons/Image";
import LinkIcon from "@material-ui/icons/Link";
import TagIcon from "@material-ui/icons/LocalOffer";

import { Button as SaveButton, TextInput } from "../../../components/Forms";
import Block from "./Block";

const Header = () => (
  <Box>
    <CardHeader
      title="Principais projetos"
      titleTypographyProps={{ variant: "h6" }}
      subheader="23 projetos"
      style={{ padding: 0 }}
      action={
        <SaveButton variant="contained" color="primary" disableElevation style={{ margin: 10 }}>
          Novo Projeto
        </SaveButton>
      }
    />
  </Box>
);

const Posts = () => {
  const [tab, setTab] = useState("preview");
  const onTabChange = useCallback(newTab => () => setTab(newTab), []);
  const isTabActive = useCallback(value => tab === value, [tab]);
  const tabColor = useCallback(value => (isTabActive(value) ? "primary" : "secondary"), [isTabActive]);

  return (
    <Block title={<Header />}>
      <Box display="flex">
        <Card style={{ width: "35%" }}>
          <CardContent>
            <Grid container spacing={1}>
              <Grid item xs={12}>
                <TextInput label="Título" fullWidth />
              </Grid>
              <Grid item xs={12}>
                <TextInput label="Descrição" fullWidth multiline rows={3} placeholder="(com html)" />
              </Grid>
            </Grid>
            <Grid item xs={12}>
              <Grid container spacing={0}>
                <Grid item xs={12}>
                  <ButtonGroup variant="text" color="secondary" fullWidth>
                    <Button variant="text" color={tabColor("preview")} onClick={onTabChange("preview")}>
                      <PreviewIcon />
                    </Button>
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
                    {isTabActive("preview") && <div>[@TODO]</div>}

                    {isTabActive("image") && (
                      <Grid container spacing={1}>
                        <Grid item xs={8}>
                          <TextInput label="Link da imagem" fullWidth compact />
                        </Grid>
                        <Grid item xs={4}>
                          <Box width="100%" height="100%" border="1px solid #000">
                            &nbsp;
                          </Box>
                        </Grid>
                      </Grid>
                    )}

                    {isTabActive("link") && (
                      <Grid container spacing={1}>
                        <Grid item xs={12}>
                          <TextInput label="Link do card" fullWidth compact />
                        </Grid>
                      </Grid>
                    )}
                  </Box>
                </Grid>
              </Grid>
            </Grid>

            <Grid item xs={12}>
              <ButtonGroup fullWidth color="primary" variant="outlined" disableElevation>
                <Button variant="contained">Cover</Button>
                <Button>Contain</Button>
              </ButtonGroup>
            </Grid>
          </CardContent>
          <CardActions>
            <Grid container>
              <Grid item xs={5}>
                <Button fullWidth variant="text" color="secondary">
                  Excluir
                </Button>
              </Grid>
              <Grid item xs={7}>
                <Button fullWidth variant="contained" color="primary" disableElevation>
                  Salvar
                </Button>
              </Grid>
            </Grid>
          </CardActions>
        </Card>
      </Box>
    </Block>
  );
};

export default Posts;

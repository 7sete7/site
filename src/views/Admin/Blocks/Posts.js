import React, { useState, useCallback } from "react";

import Box from "@material-ui/core/Box";
import TextField from "@material-ui/core/TextField";
import Grid from "@material-ui/core/Grid";
import Typography from "@material-ui/core/Typography";
import CardHeader from "@material-ui/core/CardHeader";
import Card from "@material-ui/core/Card";
import CardContent from "@material-ui/core/CardContent";
import Tabs from "@material-ui/core/Tabs";
import Tab from "@material-ui/core/Tab";
import ButtonGroup from "@material-ui/core/ButtonGroup";
import MButton from "@material-ui/core/Button";

import { Button } from "../../../components/Forms";
import Block from "./Block";

const labelProps = { shrink: true, style: { fontWeight: 600 } };
const Header = () => (
  <Box>
    <CardHeader
      title="Principais projetos"
      titleTypographyProps={{ variant: "h6" }}
      subheader="23 projetos"
      style={{ padding: 0 }}
      action={
        <Button variant="contained" color="primary" disableElevation style={{ margin: 10 }}>
          Novo Projeto
        </Button>
      }
    />
  </Box>
);

const TabGroup = React.forwardRef((props, ref) => {
  console.log(props);
  return (
    <ButtonGroup {...props} ref={ref} variant="outlined" color="secondary" style={{ width: "100%" }}>
      {props.children}
    </ButtonGroup>
  );
});

const Posts = () => {
  const [tab, setTab] = useState('preview');
  const onTabChange = useCallback(newTab => () => setTab(newTab), []);
  const isTabActive = useCallback(value => tab === value, [tab]);
  const tabColor = useCallback(value => isTabActive(value) ? "primary" : "secondary", [isTabActive]);

  return (
    <Block title={<Header />}>
      <Box display="flex">
        <Card style={{ width: "35%" }}>
          <CardContent>
            <Grid container spacing={1}>
              <Grid item xs={12}>
                <TextField variant="outlined" label="Título" fullWidth InputLabelProps={labelProps} />
              </Grid>
              <Grid item xs={12}>
                <TextField
                  variant="outlined"
                  label="Descrição"
                  fullWidth
                  multiline
                  rows={3}
                  InputLabelProps={labelProps}
                  placeholder="(com html)"
                />
              </Grid>
            </Grid>
            <Grid item xs={12}>
              <Grid container spacing={0}>
                <Grid item xs={12}>
                  <ButtonGroup variant="text" color="secondary" fullWidth>
                    <MButton variant="text" color={tabColor('preview')} onClick={onTabChange('preview')}>
                      P
                    </MButton>
                    <MButton variant="text" color={tabColor('image')} onClick={onTabChange('image')}>
                      I
                    </MButton>
                    <MButton variant="text" color={tabColor('link')} onClick={onTabChange('link')}>
                      L
                    </MButton>
                  </ButtonGroup>
                </Grid>
                <Grid item xs={12}>
                  <Box p={1}>
                    {isTabActive('preview') && (
                      <div>Oi preview</div>
                    )}

                    {isTabActive('image') && (
                      <div>Oi image</div>
                    )}

                    {isTabActive('link') && (
                      <div>Oi link</div>
                    )}
                  </Box>
                </Grid>
              </Grid>
            </Grid>
          </CardContent>
        </Card>
      </Box>
    </Block>
  );
};

export default Posts;

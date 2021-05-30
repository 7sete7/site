import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

import CssBaseline from "@material-ui/core/CssBaseline";
import { MuiThemeProvider } from "@material-ui/core/styles";
import { createMuiTheme } from "@material-ui/core/styles";
import DefaultTheme from "./theme/default";

import Home from "./views/Home/Home";

import Header from "./components/Header";

const NotFound = () => {
  return <div>NotFound</div>;
};

const theme = createMuiTheme(DefaultTheme);
const App = () => (
  <MuiThemeProvider theme={theme}>
    <CssBaseline />
    <div style={{ height: "100vh" }}>
      <Header />
      <Router>
        <Switch>
          <Route path="/dashboard" component={Home} />
          <Route exact path="/" component={Home} />
          <Route component={NotFound} />
        </Switch>
      </Router>
    </div>
  </MuiThemeProvider>
);

export default App;
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

const ROUTES = [];
const hasSubdomain = window.location.pathname !== "/" && !ROUTES.includes(window.location.pathname);
const subdomain = hasSubdomain ? /(\/.+?)[/$]/.exec(window.location.pathname)[1] : undefined;

const theme = createMuiTheme(DefaultTheme);
const App = () => (
  <MuiThemeProvider theme={theme}>
    <CssBaseline />
    <div style={{ height: "100vh" }}>
      <Header />
      <Router basename={subdomain}>
        <Switch>
          <Route exact path="/" component={Home} />
          <Route component={NotFound} />
        </Switch>
      </Router>
    </div>
  </MuiThemeProvider>
);

export default App;
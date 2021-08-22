import React, { useMemo } from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import { useSelector } from "react-redux";
import { getData } from "./store/homeReducer";

import CssBaseline from "@material-ui/core/CssBaseline";
import { MuiThemeProvider } from "@material-ui/core/styles";
import { createTheme } from "@material-ui/core/styles";
import DefaultTheme from "./theme/default";
import AdminTheme from "./theme/admin";

import Home from "./views/Home";
import Admin from "./views/Admin";
import Login from "./views/Login";

const NotFound = () => {
  return <div>NotFound</div>;
};

const ROUTES = ["/admin", "/admin/login"];
const hasSubdomain = window.location.pathname !== "/" && !ROUTES.includes(window.location.pathname);
const subdomain = hasSubdomain ? /(\/.+?)(\/.+)?$/.exec(window.location.pathname)?.[1] : undefined;

const App = () => {
  const { colors } = useSelector(getData);

  // Merge incoming colors (from admin) with default palette
  const theme = useMemo(() => {
    if (colors == null || Object.keys(colors).length < 1) return createTheme(DefaultTheme);

    const merged = DefaultTheme.copyPaletteWith(colors);
    return createTheme(merged);
  }, [colors]);

  return (
    <MuiThemeProvider theme={theme}>
      <CssBaseline />
      <div style={{ height: "100vh" }}>
        <Router basename={subdomain}>
          <Switch>
            <Route exact path="/" component={Home} />
            <MuiThemeProvider theme={createTheme(AdminTheme)}>
              <Route exact path="/admin" component={Admin} />
              <Route exact path="/admin/login" component={Login} />
            </MuiThemeProvider>
            <Route component={NotFound} />
          </Switch>
        </Router>
      </div>
    </MuiThemeProvider>
  );
};

export default App;

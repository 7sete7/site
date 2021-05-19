import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import CssBaseline from "@material-ui/core/CssBaseline";
import { MuiThemeProvider } from "@material-ui/core/styles";
import { createMuiTheme } from "@material-ui/core/styles";
import { useSelector } from "react-redux";

import Home from "./views/Home/Home";
import Setting from "./views/Setting/Setting";

import Header from "./components/Header";
import { getTheme } from "./views/Setting/settingsReducer";

const NotFound = () => {
  return <div>NotFound</div>;
};

export default function App() {
  const theTheme = useSelector(getTheme);

  return (
    <MuiThemeProvider theme={createMuiTheme(theTheme)}>
      <CssBaseline />
      <div style={{ height: "100vh" }}>
        <Header />
        <Router>
          <Switch>
            <Route path="/dashboard" component={Home} />
            <Route path="/setting" component={Setting} />
            <Route exact path="/" component={Home} />
            <Route component={NotFound} />
          </Switch>
        </Router>
      </div>
    </MuiThemeProvider>
  );
}

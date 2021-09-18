import React, { useState, useCallback, useEffect } from "react";

import Container from "@material-ui/core/Container";
import Typography from "@material-ui/core/Typography";
import Box from "@material-ui/core/Box";
import Grid from "@material-ui/core/Grid";
import MuiAccordion from "@material-ui/core/Accordion";
import MuiAccordionSummary from "@material-ui/core/AccordionSummary";
import AccordionDetails from "@material-ui/core/AccordionDetails";

import { TextInput, Button } from "../../components/Forms";
import { useDispatch, useSelector } from "react-redux";
import { getUser, logged, populate, openSnack } from "../../store/adminReducer";

import withStyles from "@material-ui/styles/withStyles";
import login from "../../DAL/login";
import recover from "../../DAL/recover";
import authInfo from "../../DAL/loginInfo";
import fetchAdminData from "../../DAL/fetchAdminData";

const Accordion = withStyles({
  root: {
    border: "1px solid rgba(0, 0, 0, .125)",
    boxShadow: "none",
    "&:not(:last-child)": {
      borderBottom: 0,
    },
    "&:before": {
      display: "none",
    },
    "&$expanded": {
      margin: "auto",
    },
  },
  expanded: {},
})(MuiAccordion);

const AccordionSummary = withStyles({
  root: {
    backgroundColor: "rgba(0, 0, 0, .02)",
    borderBottom: "1px solid rgba(0, 0, 0, .125)",
    marginBottom: -1,
    minHeight: 56,
    "&$expanded": {
      minHeight: 56,
    },
  },
  content: {
    "&$expanded": {
      margin: "12px 0",
    },
  },
  expanded: {},
})(MuiAccordionSummary);

const Login = () => {
  const [expanded, setExpanded] = useState("login");
  const [values, setValues] = useState({ email: "", pass: "" });
  const [status, setStatus] = useState();

  const dispatch = useDispatch();
  const user = useSelector(getUser);

  const onExpand = useCallback(() => {
    setExpanded(current => (current === "login" ? "password" : "login"));
    setStatus(null);
  }, [setExpanded]);

  const isExpanded = useCallback(name => expanded === name, [expanded]);
  const onChange = useCallback(
    name =>
      ({ target }) =>
        setValues(v => ({ ...v, [name]: target.value })),
    [setValues],
  );

  const onLogin = useCallback(
    event => {
      event.preventDefault();
      setStatus("loading");

      login(values).then(token => {
        if (token == null) return setStatus("error");

        localStorage.setItem("token", token);
        window.location.pathname = "admin";
      });
    },
    [values],
  );

  const onRecoverPassword = useCallback(event => {
    event.preventDefault();
    setStatus("loading");

    recover(values)
      .then(() => {
        setStatus(null);
        dispatch(openSnack({ msg: "Siga as instruções enviadas ao seu email", type: "success" }));
      })
      .catch(() => {
        alert("Email não encontrado.");
        setStatus("error");
        dispatch(openSnack({ msg: "Email não encontrado", type: "error" }));
      });
      //eslint-disable-next-line
  }, [values]);

  useEffect(() => {
    if (user != null) window.location.pathname = window.location.pathname.replace("/login", "");

    authInfo().then(usr => {
      if (usr != null) {
        dispatch(logged(usr));
        window.location.pathname = window.location.pathname.replace("/login", "");
      }
    });

    fetchAdminData().then(data => dispatch(populate(data)));
    //eslint-disable-next-line
  }, [dispatch]);

  return (
    <Box width={1} height={1} display="flex" justifyContent="center" alignItems="center" bg="#eee">
      <Container maxWidth="sm">
        <Accordion square expanded={isExpanded("login")} onChange={onExpand}>
          <AccordionSummary>
            <Typography>Login</Typography>
          </AccordionSummary>
          <AccordionDetails>
            <Box py={3}>
              <form onSubmit={onLogin}>
                <Grid container spacing={2}>
                  <Grid item xs={12}>
                    <TextInput
                      label="Email"
                      type="email"
                      error={status === "error"}
                      helperText={status === "error" ? "Email ou senha inválidos" : ""}
                      fullWidth
                      value={values.email}
                      onChange={onChange("email")}
                    />
                  </Grid>
                  <Grid item xs={12}>
                    <TextInput label="Senha" type="password" error={status === "error"} fullWidth value={values.pass} onChange={onChange("pass")} />
                  </Grid>
                  <Grid container item xs={12}>
                    <Grid item xs={12} sm={6} md={4} style={{ marginLeft: "auto" }}>
                      <Button type="submit" color="primary" variant="contained" disabled={status === "loading"} disableElevation fullWidth>
                        Entrar
                      </Button>
                    </Grid>
                  </Grid>
                </Grid>
              </form>
            </Box>
          </AccordionDetails>
        </Accordion>

        <Accordion square expanded={isExpanded("password")} onChange={onExpand}>
          <AccordionSummary>
            <Typography>Esqueci a senha</Typography>
          </AccordionSummary>
          <AccordionDetails>
            <Box py={3} width={1}>
              <form onSubmit={onRecoverPassword}>
                <Grid container spacing={2}>
                  <Grid item xs={12} style={{ textAlign: "center", marginBottom: 15 }}>
                    <Typography variant="h5">Recuperar senha</Typography>
                    <Typography variant="body2">
                      Entre o email cadastrado na sua conta. Se ele existir, enviaremos um email com a sua nova senha.
                    </Typography>
                  </Grid>
                  <Grid item xs={12}>
                    <TextInput label="Email" fullWidth value={values.email} onChange={onChange("email")} />
                  </Grid>
                  <Grid container item xs={12}>
                    <Grid item xs={12} sm={6} md={4} style={{ marginLeft: "auto" }}>
                      <Button type="submit" color="primary" variant="contained" disabled={status === "loading"} disableElevation fullWidth>
                        Enviar
                      </Button>
                    </Grid>
                  </Grid>
                </Grid>
              </form>
            </Box>
          </AccordionDetails>
        </Accordion>
      </Container>
    </Box>
  );
};

export default Login;

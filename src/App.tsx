import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import CssBaseline from "@material-ui/core/CssBaseline";
import { makeStyles, createStyles, Theme } from "@material-ui/core/styles";
import Box from "@material-ui/core/Box";
import Paper from "@material-ui/core/Paper";
import Grid from "@material-ui/core/Grid";

import RegisterCardForm from "./features/RegisterCardForm";
import Menu from "./features/Menu";
import Container from './components/Container'

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    app: {
      height: "100vh",
      alignItems: "center",
      justifyContent: "center",
    },
    paper: {
      width: "100%",
      height: "100%",
    },
  })
);

function App() {
  const classes = useStyles();
  return (
    <Router>
      <Box className={classes.app}>
        <CssBaseline />
        <Container>
          <Paper className={classes.paper}>
            <Switch>
              <Route exact path="/">
              <RegisterCardForm />
              </Route>
              <Route exact path="/register-card-form">
                <RegisterCardForm />
              </Route>
              <Route exact path="/menu">
                <Menu />
              </Route>
            </Switch>
            </Paper>
        </Container>
      </Box>
    </Router>
  );
}

export default App;

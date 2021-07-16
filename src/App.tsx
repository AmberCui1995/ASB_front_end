
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Redirect,
} from "react-router-dom";
import { createStyles, Theme } from "@material-ui/core/styles";
import CssBaseline from "@material-ui/core/CssBaseline";
import RegisterCardForm from "./features/RegisterCardForm";
import Menu from "./features/Menu";
import { makeStyles } from "@material-ui/styles";
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
const App = () => {

  const classes = useStyles();
  return (
    <>
      <div className={classes.app}>
        <CssBaseline />
        <Container>
          <Router>
            <Switch>
              <Route exact path="/">
                <Redirect to="/register-card-form" />
              </Route>
              <Route exact path="/register-card-form">
                <RegisterCardForm />
              </Route>
              <Route exact path="/menu">
                <Menu />
              </Route>
            </Switch>
          </Router>
        </Container>
      </div>
    </>
  );
}

export default App;

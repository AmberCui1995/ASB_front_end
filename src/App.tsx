
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Redirect,
} from "react-router-dom";

import CssBaseline from "@material-ui/core/CssBaseline";
import RegisterCardForm from "./features/RegisterCardForm";
import Menu from "./features/Menu";

const App = () => {
  return (
    <>

      <CssBaseline />
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
    </>
  );
}

export default App;

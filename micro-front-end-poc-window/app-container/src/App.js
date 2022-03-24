import React from "react";
import { BrowserRouter, Switch, Route} from "react-router-dom";
//import { createBrowserHistory } from "history";
import MicroFront from "./MicroFront";
import Header from "./AppHeader"

import "./App.css";

//const defaultHistory = createBrowserHistory();

const {
  REACT_APP_ONE: hostAppOne,
  REACT_APP_TWO: hostAppTwo,
} = process.env;

function AppOne({ history }) {
  return <MicroFront history={history} host={hostAppOne} name="AppOne" />;
}

function AppTwo({ history }) {
  return <MicroFront history={history} host={hostAppTwo} name="AppTwo" />;
}

function App() {
  return (
    <BrowserRouter>
      <React.Fragment>
          <Header />
          <Switch>
            <Route exact path="/appOne" component={AppOne} />
            <Route exact path="/appTwo" component={AppTwo} />
          </Switch>
      </React.Fragment>
    </BrowserRouter>
  );
}

export default App;

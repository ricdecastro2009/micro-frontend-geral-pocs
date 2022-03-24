import React from "react";
import { Router, Route } from "react-router-dom";
import { createBrowserHistory } from "history";


const defaultHistory = createBrowserHistory();

function App({ history = defaultHistory }) {
  return (
    
    <Router history={history}>
      <h1>
        App Two
      </h1>
      <Route exact path="/appTwo"  />
    </Router>
  );
}

export default App;

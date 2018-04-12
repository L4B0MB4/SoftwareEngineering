import React, { Component } from "react";
import Index from "./components/index";
import ListSupplier from "./components/ListSupplier";
import ListWine from "./components/ListWine";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

class App extends Component {
  render() {
    return (
      <Router>
        <Switch>
          <Route exact path="/listsupplier" component={ListSupplier} />
          <Route exact path="/listwine" component={ListWine} />
          <Route exact path="/" component={Index} />
        </Switch>
      </Router>
    );
  }
}

export default App;

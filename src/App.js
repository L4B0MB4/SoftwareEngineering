import React, { Component } from "react";
import Login from "./components/login";
import Index from "./components/index";
import Search from "./components/Search";
import ListeLieferanten from "./components/ListeLieferanten";
import ListWine from "./components/ListeWeine";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

class App extends Component {
  render() {
    return (
      <Router>
        <Switch>
          <Route exact path="/listsupplier" component={ListeLieferanten} />
          <Route exact path="/listwine" component={ListWine} />
          <Route exact path="/search" component={Search} />
          <Route exact path="/login" component={Login} />
          <Route exact path="/" component={Index} />
        </Switch>
      </Router>
    );
  }
}

export default App;

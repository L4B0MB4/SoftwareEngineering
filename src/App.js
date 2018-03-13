import React, { Component } from 'react';
import Login from "./components/login";
import Index from "./components/index";
import Search from "./components/Search";
import Dialoge from "./components/dialoge"
import {BrowserRouter as Router,Switch,Route} from "react-router-dom"

class App extends Component {
  render() {
    return (
      <Router>
        <Switch>
          <Route exact path="/search" component={Search}/>
          <Route exact path="/login" component={Login}/>
          <Route exact path="/dialoge" component={Dialoge}/>
          <Route exact path="/" component={Index}/>
        </Switch>
      </Router>
    );
  }
}

export default App;

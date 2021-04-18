import React, { Component } from "react";
import "./App.css";
import Confirmation from "./components/Confirmation";
import Home from "./components/Home";
import Results from "./components/Results";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
class App extends Component {
  render() {
    return (
      <Router>
        {/* <NavBar /> */}
        <div className="App">
          <Switch>
            <Route path="/" exact component={Home} />
            <Route path="/confirmation" component={Confirmation} />
            <Route path="/Results" component={Results} />
          </Switch>
        </div>
      </Router>
    );
  }
}

export default App;

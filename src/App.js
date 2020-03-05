import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Home from "./pages/Home";
import Nav from "./components/Nav";
import Events from "./pages/Events";
import Books from "./pages/Books";
import NewsLetter from "./pages/NewsLetter";


class App extends Component {
  render() {
    return (
      <Router>
        <Nav>

        </Nav>

        <Switch>
          <Route exact path="/" component={Home} />
          <Route exact path="/events" component={Events} />
          <Route exact path="/books" component={Books} />
          <Route exact path="/newsletter" component={NewsLetter} />
        </Switch>


      </Router>
    )
  }
}

export default App;
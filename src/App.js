import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Home from "./pages/Home";
import BooksList from "./pages/BooksList";
import MySpace from "./pages/MySpace";
import NoMatch from "./pages/NoMatch";
import Nav from "./components/Nav";
import EventsList from "./pages/EventsList";
import { StateProvider } from './utils/GlobalState';

function App() {
  return (
    <Router>

      <StateProvider>
        <Nav />
        <Switch>
          <Route exact path="/" component={Home} />
          <Route exact path="/home" component={Home} />
          <Route exact path="/events" component={EventsList} />
          <Route exact path="/books" component={BooksList} />
          <Route exact path="/my-space" component={MySpace} />
          <Route component={NoMatch} />
        </Switch>
      </StateProvider>

    </Router>
  );
}

export default App;

import React from "react";
import { BrowserRouter as Router, Route, Switch, Link } from "react-router-dom";


import Home from "./pages/Home";
import Nav from "./components/Nav";
import Events from "./pages/Events";
import Books from "./pages/Books";
import NewsLetter from "./pages/NewsLetter";




export default function App() {
  return (
    <Router>
      <Nav>
        <div>
          <ul>
            <li>
              <Link to='/'>Home</Link>
            </li>
            <li>
              <Link to='/events'>Events</Link>
            </li>
            <li>
              <Link to='/books'>Books</Link>
            </li>
            <li>
              <Link to='/newsletter'>News Letter</Link>
            </li>
          </ul>
        </div>
      </Nav>

      <Switch>
        <Route exact path="/" component={Home} />
        <Route exact path="/events" component={Events} />
        <Route exact path="/books" component={Books} />
        <Route exact path="/newsletter" component={NewsLetter} />
      </Switch>
    </Router>
  );
}
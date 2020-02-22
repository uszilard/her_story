import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Home from "./pages/Home";
import Nav from "./components/Nav";
//import BooksList from "./pages/BooksList";
//import NewsLetter from "./pages/NewsLetter";
//import NoMatch from "./pages/NoMatch";

//import EventsList from "./pages/EventsList";


function App() {
  return (
    <Router>


      <Nav />
      <Switch>
        <Route exact path="/" component={Home} />
        <Route exact path="/home" component={Home} />
        {/*<Route exact path="/events" component={EventsList} />
        <Route exact path="/books" component={BooksList} />
        <Route exact path="/newsletter" component={NewsLetter} />
        <Route component={NoMatch} />*/}
        <html lang="en">
          <head>
            <meta charset="UTF-8" />
            <meta name="viewport" content="width=device-width, initial-scale=1.0" />
            <title>Document</title>
          </head>
          <body>

          </body>
        </html>-->
      </Switch>


    </Router>
  );
}

export default App;

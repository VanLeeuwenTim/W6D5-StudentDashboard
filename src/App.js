import React from "react";
import Overview from "./Overview";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";

const App = () => (
  <Router>
    <div>
      <nav>
        <ul>
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/about">About</Link>
          </li>
        </ul>
      </nav>

      <Switch>
        <Route path="/about">
          <About />
        </Route>

        <Route path="/">
          <Overview />
        </Route>
      </Switch>
    </div>
  </Router>
);

const About = () => (
  <div>
    <h2>About</h2>
    <p>Hallo en welkom op mijn mooie studentdashboard</p>
  </div>
);

export default App;

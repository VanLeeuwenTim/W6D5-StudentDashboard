import React from "react";
import Overview from "./Overview";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import StudentsOverview from "./StudentsOverview";

const App = () => (
  <Router>
    <div>
      <nav>
        <ul>
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/students">Students</Link>
          </li>
        </ul>
      </nav>

      <Switch>
        <Route path="/students">
          <StudentsOverview />
        </Route>

        <Route path="/">
          <Overview />
        </Route>
      </Switch>
    </div>
  </Router>
);

export default App;

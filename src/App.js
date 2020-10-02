import React from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import {PageOne } from "./pages/PageOne";
import {PageTwo} from "./pages/PageTwo";
import {PageThree} from "./pages/PageThree";

function App() {
  return (
    <>
      <Router>
        <div>
          <ul>
            <li>
              <Link to="/">one</Link>
            </li>
            <li>
              <Link to="/two">two</Link>
            </li>
            <li>
              <Link to="/three">three</Link>
            </li>
          </ul>

          <hr />

          <Switch>
            <Route exact path="/">
              <PageOne />
            </Route>
            <Route path="/two">
              <PageTwo />
            </Route>
            <Route path="/three">
              <PageThree />
            </Route>
          </Switch>
        </div>
      </Router>


    </>
  );
}

export default App;

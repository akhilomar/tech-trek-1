import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter as Router, Route } from "react-router-dom";
import PrivateRoute from "./components/PrivateRoute";

import "./index.css";
import App from "./App";
import * as serviceWorker from "./serviceWorker";
import Leaderboard from "./components/Leaderboard";
import Rules from "./components/Rules";
import Dashboard from "./components/Dashboard";
import "bootstrap/dist/css/bootstrap.css";

const Root = () => (
  <Router>
    <Route exact path="/" component={App} />
    <Route exact path="/Rules" component={Rules} />
    <PrivateRoute path="/Dashboard" component={Dashboard} />
    <Route exact path="/Leaderboard" component={Leaderboard} />
  </Router>
);

ReactDOM.render(<Root />, document.getElementById("root"));
serviceWorker.unregister();

import React from "react";
import { useSelector } from "react-redux";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import { Home, Page } from "./screens";
const Routes = () => {
  const isLoggedIn = useSelector((state) => state.userReducer.isLoggedin);

  return (
    <Router>
      <Switch>
        <Route path="/" exact component={Home} />
        <Route path="/page" component={Page} />
      </Switch>
    </Router>
  );
};
export default Routes;

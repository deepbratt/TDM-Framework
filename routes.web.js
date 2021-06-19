import React from "react";
import { useSelector } from "react-redux";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import TabNavigator from "./Component/CustomBottomTab";
import { Home, Notification, Page, RestPassword, RestPassword2, SignIn, SignUp } from "./screens";
const Routes = () => {
  const isLoggedIn = useSelector((state) => state.userReducer.isLoggedin);

  return (
    <Router>
      <Switch>
        <Route path="/jff" exact component={Home} />
        <Route path="/page" component={Page} />
        <Route path="/SignIn" component={SignIn} />
        <Route path="/SignUp" component={SignUp} />
        <Route path="/Tab" component={TabNavigator} />
        <Route path="/Reset" component={RestPassword} />
        <Route path="/ResetPass" component={RestPassword2} />
        <Route path="/" component={Notification} />


      </Switch>
    </Router>
  );
};
export default Routes;

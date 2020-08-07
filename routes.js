import React from "react";
import { useSelector } from "react-redux";
import { NativeRouter, Route } from "react-router-native";
import { Home, Page } from "./screens";
const Routes = () => {
  const isLoggedIn = useSelector((state) => state.userReducer.isLoggedin);

  return (
    <NativeRouter>
      <Route path="/" exact component={Home} />
      <Route path="/page" component={Page} />
    </NativeRouter>
  );
};
export default Routes;

import React from "react";
import { useSelector } from "react-redux";
import { NativeRouter, Route,Link } from "react-router-native";
import { Home, Page, SignIn, SignUp, Verify } from "./screens";
const Routes = () => {
  const isLoggedIn = useSelector((state) => state.userReducer.isLoggedin);

  return (
    <NativeRouter>
      <Route path="/" exact component={SignUp} />
      <Route path="/signup" component={Verify} />
    </NativeRouter>
  );
};
export default Routes;

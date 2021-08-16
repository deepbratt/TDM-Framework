import React from "react";
import { useSelector } from "react-redux";
import { BackButton, NativeRouter, Route } from "react-router-native";
import Home from "./src/screens/Home";
import SignIn from "./src/screens/SignIn/SignIn";

const Routes = () => {
  return (
    <NativeRouter>
      <BackButton>
        <Route exact path="/" component={SignIn} />
        <Route exact path="/Home" component={Home} />
      </BackButton>
    </NativeRouter>
  );
};
export default Routes;

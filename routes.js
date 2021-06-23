import React from "react";
import { useSelector } from "react-redux";
import { NativeRouter, Route,Link } from "react-router-native";
import { BeforeLogin, Layout } from "./Component/Layout/index.js";
import { Home, Page, SignIn, SignUp, Verify } from "./screens";
import AfterLogin from "./Component/Layout/AfterLoginLayout.js";

const Routes = () => {
  const isLoggedIn = useSelector((state) => state.userReducer.isLoggedin);

  return (
    <NativeRouter>
      {/* <Route path="/" exact component={SignUp} /> */}
      <AfterLogin>
      <Route path="/" exact component={Home} />
      <Route path="/page" exact component={Page} />
      </AfterLogin>
     
      {/* <Route path="/" component={Home} /> */}
    </NativeRouter>
  );
};
export default Routes;

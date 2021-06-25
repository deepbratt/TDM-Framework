import React from "react";
import { useSelector } from "react-redux";
import { NativeRouter, Route,Link } from "react-router-native";
import { BeforeLogin, Layout } from "./Component/Layout/index.js";
import { Home, Page,  SignUp, Verify } from "./screens";
import AfterLogin from "./Component/Layout/AfterLoginLayout.js";
import DrawerNavigator from "./Component/CustomDrawer/index.js";
import SignInPage from "./screens/SignIn/SignInPage.js";
const Routes = () => {
  const isLoggedIn = useSelector((state) => state.userReducer.isLoggedin);

  return (
    <NativeRouter>
  {/* <Route path="/" exact component={SignUp} />

      <Route path="/page" exact component={Page} /> */}
  
  {/* <DrawerNavigator/> */}

  
      <Route path="/" component={SignInPage} />
      <Route path="/page" exact component={Page} /> 
    </NativeRouter>
  );
};
export default Routes;

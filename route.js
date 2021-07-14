import React from "react";
import { connect } from "react-redux";
import {Public } from "./src/utils/constants/path";
import Navigation from "./src/navigation/index"
import { BackButton, NativeRouter, Route } from "react-router-native";
import PublicRoute from "./src/Route/publicRoute";

const AuthRoute = ({ component: Component, isLoggedIn, ...rest }) => {
 
  console.log(isLoggedIn,"log");
  return (
    <NativeRouter>
      {
        isLoggedIn ? (
          <Navigation/>
        ):(
          Public.map((route) => {
            return(
              <BackButton>
            <PublicRoute
              exact 
              path={route.path}
             key={route.id} 
             component={route.component} 
             />
             </BackButton>)
  
          })
        )
      }
    
  
      </NativeRouter>

  )}
const mapStateToProps = (state) => ({
  isLoggedIn: state.rootReducer.auth.isLoggedIn,
});

export default connect(mapStateToProps)(AuthRoute);

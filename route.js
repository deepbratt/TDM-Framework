import React from "react";
import { connect } from "react-redux";
import LoginScreen from "./src/screens/Login";
import Navigation from "./src/navigation/index"
import { NativeRouter } from "react-router-native";
const AuthRoute = ({ component: Component, isLoggedIn, ...rest }) => {
  console.log(isLoggedIn,"log");
  return (
    <NativeRouter>
   {  isLoggedIn ? (
         <Navigation/>
        ) : (    
      <LoginScreen/>
        )
      }
      </NativeRouter>

  )}
const mapStateToProps = (state) => ({
  isLoggedIn: state.rootReducer.auth.isLoggedIn,
});

export default connect(mapStateToProps)(AuthRoute);

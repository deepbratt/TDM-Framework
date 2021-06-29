import React from "react";
import { connect } from "react-redux";
import LoginScreen from "./screens/Login";
import Navigation from "./navigation/index"
const AuthRoute = ({ component: Component, isLoggedIn, ...rest }) => {
  console.log(isLoggedIn,"log");
  return (
     isLoggedIn ? (
         <Navigation/>
        ) : (    
      <LoginScreen/>
        ))
      }



const mapStateToProps = (state) => ({
  isLoggedIn: state.rootReducer.auth.isLoggedIn,
});

export default connect(mapStateToProps)(AuthRoute);

import React,{FC, useEffect, useState} from 'react'
import {Route ,RouteProps,useHistory} from "react-router-native";
import SignIn from "../screens/SignIn/SignIn"

import { connect } from "react-redux";
import { getToken } from '../utils/general.utils';
type Private={
  component: React.ComponentType;
} & RouteProps;

 const PrivateRoute:FC<Private> = ({ component: Component, ...rest }:Private) => {
    const history = useHistory();
    const [isLoggedIn, setIsLoggedIn] = useState<any>("");
    useEffect(() => {
      getToken().then((token) => {
        setIsLoggedIn(token);
        if(!token){
          history.push("/SignIn")
        }
        console.log(token)

      });
    
    }, []);
    if (isLoggedIn === "") {
      return null;
    }

    return (
      <Route
        {...rest}
        render={(props) =>
          <Component {...props}/>
        }
      />
    );
  };


  export default PrivateRoute;
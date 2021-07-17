import React,{FC} from 'react'
import {Route ,useHistory} from "react-router-native";


import { connect } from "react-redux";
interface Private{
    component:any;
    isLoggedIn:any;

}
 const PrivateRoute:FC<Private> = ({ component: Component, isLoggedIn, ...rest }) => {
    const history = useHistory();
    console.log(isLoggedIn);
    return (
      <Route
        {...rest}
        render={(props) =>
          isLoggedIn ?  <Component {...props}/> : history.push("/SignIn")
        }
      />
    );
  };

const mapStateToProps = (state) => ({
    isLoggedIn: state.rootReducer.auth.isLoggedIn,
  });
  
  export default connect(mapStateToProps) (PrivateRoute);
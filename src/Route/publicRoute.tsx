import React,{FC} from 'react'
import {Route ,useHistory,Redirect} from "react-router-native";
import { connect } from "react-redux";
interface Public{
    component:any;
    isLoggedIn:any;

}
 const PublicRoute:FC<Public> = ({ component: Component, isLoggedIn, ...rest }) => {
    const history = useHistory();
    console.log(isLoggedIn);
    return (
      <Route
        {...rest}
        render={(props) =>
          isLoggedIn ? <Redirect to="/" />   :  <Component {...props} /> 
        }
      />
    );
  };
const mapStateToProps = (state) => ({
    isLoggedIn: state.rootReducer.auth.isLoggedIn,
  });
  
  export default connect(mapStateToProps) (PublicRoute);

import React from 'react'
import {View,Text} from "react-native"
import { useDispatch } from 'react-redux';
import CustomButton from '../../component/customButton'
import { login } from '../../redux/reducers/authSlice';


function SignIn() {
 const dispatch = useDispatch();
  return ( 
    <View>
      <Text>
        Signin
      </Text>
      <Text>
        Signin
      </Text> 
      <Text>
        Signin
      </Text>
       <Text>
        Signin
      </Text>
      <CustomButton text="login" onPress={()=>dispatch(login())}/>
    </View>  
  )}
  export default SignIn;
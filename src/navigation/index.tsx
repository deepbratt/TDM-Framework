
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import * as React from 'react';
import { connect } from "react-redux";
import { RootStackParamList } from '../../types';
import { SignIn, SignInWithEmail, SignUp, Verify } from '../screens';
import MyDrawer from "./Customdrawer/index";
interface Private{
 
    isLoggedIn:any;

}
const Navigation:React.FC<Private>=({ isLoggedIn })=> {
  return (
    <NavigationContainer
      >
      <RootNavigator />
    
    </NavigationContainer>
  );
}

const Stack = createStackNavigator<RootStackParamList>();

function RootNavigator() {
  return (
    <Stack.Navigator screenOptions={{ headerShown: false }}>
      <Stack.Screen name="Root" component={MyDrawer} />
  
    </Stack.Navigator>
  );
};
// function LOGINNavigator() {
//     return (
//       <Stack.Navigator screenOptions={{ headerShown: false }}>
//         <Stack.Screen name="SignIn" component={SignIn} />
//         <Stack.Screen name="SignUp" component={SignUp} />
//         <Stack.Screen name="SignInWithEmail" component={SignInWithEmail} />
//         <Stack.Screen name="Verify" component={Verify} />
    
//       </Stack.Navigator>
//     );
//   }

  export default Navigation
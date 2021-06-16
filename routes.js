import React from "react";
import { useSelector } from "react-redux";
import { NativeRouter, Route } from "react-router-native";
import { Home, Page,SignIn, SignUp, SignUpLog, Verify,RestPassword2,RestPassword } from "./screens";
import { createStackNavigator } from '@react-navigation/stack';
import { NavigationContainer } from '@react-navigation/native';
const Routes = () => {
  const isLoggedIn = useSelector((state) => state.userReducer.isLoggedin);
  const Stack = createStackNavigator();
  return (
    <NavigationContainer>
    <Stack.Navigator screenOptions={{
   headerTransparent: true,
   headerTitle: null,
   headerLeft : null,
   headerShown: false
 }}>
 <Stack.Screen name="SignUpLog" component={SignUpLog} />
  <Stack.Screen name="Verify" component={Verify} />
  <Stack.Screen name="SignUp" component={SignUp} />
  <Stack.Screen name="SignIn" component={SignIn} />
  <Stack.Screen name="ResetPassword" component={RestPassword} />
  <Stack.Screen name="RestPassword2" component={RestPassword2} />
</Stack.Navigator>
</NavigationContainer>
  );
};
export default Routes;

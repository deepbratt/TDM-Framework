import React from 'react'
import { Button } from 'react-native';
import { SafeAreaProvider } from 'react-native-safe-area-context';
import { useDispatch,useSelector } from 'react-redux';
import AuthRoute from "./route";

export const Routes = () => {

  return (
  <SafeAreaProvider>
    <AuthRoute />
  </SafeAreaProvider>
  )
}

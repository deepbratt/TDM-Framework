
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import * as React from 'react';
import { RootStackParamList } from '../../types';
import MyDrawer from "./Customdrawer/index";
export default function Navigation() {
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
}

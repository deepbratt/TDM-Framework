
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import * as React from 'react';
import { RootStackParamList } from '../../types';
import { DrawerActions } from '@react-navigation/native';
import MyDrawer from "./Customdrawer/index";


const navigationRef = React.createRef<any>();
export function openDrawer() {
  navigationRef.current.dispatch(DrawerActions.openDrawer());
}
const Navigation:React.FC=()=> {
  return (
    <NavigationContainer
    ref={navigationRef}
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


  export default Navigation
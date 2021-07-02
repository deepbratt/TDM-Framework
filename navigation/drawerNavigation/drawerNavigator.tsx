import * as React from 'react';
import { Button, View } from 'react-native';
import { createDrawerNavigator } from '@react-navigation/drawer';
import { NavigationContainer } from '@react-navigation/native';
import TabOneScreen from '../../screens/TabOneScreen';
import TabTwoScreen from '../../screens/TabTwoScreen';

const Drawer = createDrawerNavigator();

export default function DrawerNavigator() {
  return (
    // <NavigationContainer>
      <Drawer.Navigator initialRouteName="TabOne">
        <Drawer.Screen name="TabOne" component={TabOneScreen} />
        <Drawer.Screen name="TabTwo" component={TabTwoScreen} />
      </Drawer.Navigator>
    // </NavigationContainer>
  );
}

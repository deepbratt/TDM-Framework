import React from 'react';
import { createDrawerNavigator } from '@react-navigation/drawer';
import { useWindowDimensions } from 'react-native';
import TabTwoScreen from '../../screens/TabTwoScreen';
import { AppRoute } from '../AppRoute';
const Drawer = createDrawerNavigator();

function MyDrawer() {
    const dimensions = useWindowDimensions();
  return (
    <Drawer.Navigator initialRouteName="/"
    drawerType={dimensions.width >= 768 ? 'permanent' : 'front'}

    >
      <Drawer.Screen  name="Home" component={AppRoute} />
      <Drawer.Screen name="Tsb" component={TabTwoScreen} />
    </Drawer.Navigator>
  );
}
export default MyDrawer;
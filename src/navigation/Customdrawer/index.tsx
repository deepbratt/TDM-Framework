import React from 'react';
import { createDrawerNavigator } from '@react-navigation/drawer';
import { useWindowDimensions } from 'react-native';
import { AppRoute } from '../AppRoute';
import Settings from '../../screens/Settings';
const Drawer = createDrawerNavigator();

function MyDrawer() {
    const dimensions = useWindowDimensions();
  return (
    <Drawer.Navigator initialRouteName="/"
    drawerType={dimensions.width >= 768 ? 'permanent' : 'front'}
drawerContent={Settings}
    >
      <Drawer.Screen  name="Home" component={AppRoute} />

    </Drawer.Navigator>
  );
}
export default MyDrawer;
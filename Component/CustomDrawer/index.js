import React from "react";
import { createDrawerNavigator } from "@react-navigation/drawer";
import { LinearGradient } from 'expo-linear-gradient';
import AfterLogin from "../Layout/AfterLoginLayout";
import { Home, Page } from "../../screens";
import Settings from "../../screens/Settings";
import { NavigationContainer } from '@react-navigation/native';
import { Rout } from "../../routeLayout";

const Drawers = createDrawerNavigator();

function DrawerNavigator() {
  return (
<NavigationContainer>
    <Drawers.Navigator
      DrawerBarOptions={{
        showLabel: false,
        style: {
          flex: 0.9,
        },
      }}
      drawerContent={(props) => Settings(props)}
      InitialRouteName="tab"
    >
      <Drawers.Screen
        name="tab"
        component={Rout}
      />
    
  
    </Drawers.Navigator>
</NavigationContainer>
  );
}
export default DrawerNavigator;

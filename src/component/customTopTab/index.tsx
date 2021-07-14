import * as React from 'react';
import {FC} from 'react';
import { Text, View } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';
import { widthPercentageToDP as wp, heightPercentageToDP as hp } from 'react-native-responsive-screen';
import Specification from '../../screens/carDetails/specification';
import Features from '../../screens/carDetails/features';

const Tab = createMaterialTopTabNavigator();
interface Props{
  tabBarOptions: any;
  labelStyle: any;
  style: any;
  activeTintColor: any;
  indicatorStyle: any;
  name: string;
  component: any;
  name1: string;
  component1: any;
}
const CustomTopBar:FC<Props>=(Props)=> {
    return (
      <NavigationContainer>
      <Tab.Navigator
      tabBarOptions={Props.tabBarOptions}
      >
          <Tab.Screen name="Specification" component={Specification} />
          <Tab.Screen name="Features" component={Features} />
            </Tab.Navigator>
            </NavigationContainer>
  );
}
export default CustomTopBar
import React,{FC} from 'react';
import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from "react-native-responsive-screen";
import TabTwoScreen from '../../screens/TabTwoScreen';
import { tabProps } from '../../../types';
import { Link } from '@react-navigation/native';
import { Dimensions } from "react-native";
import Hashback from '../../section/HashBack';
import { COLOR } from '../../Theme/Colors';
const HEIGHT = Dimensions.get("window").height;
const WIDTH = Dimensions.get("window").width;

const Tab = createMaterialTopTabNavigator();
interface Props{
  tabBarOptions?: any;
  initialRouteName?:string;
  name1?: any;
  component1?: any;
  name2?: any;
  component2?: any;
  name3?: any;
  component3?: any;
}

 const TopBar:FC<Props>=(Props)=> {
  return (
    <Tab.Navigator
   initialRouteName="one"
   tabBarOptions={{
    style: { backgroundColor: COLOR.White , elevation:5,
    width:wp('100%')},
    indicatorStyle:{ backgroundColor: COLOR.primary,textAlign:"center",alignSelf:"center"},
    activeTintColor:COLOR.DarkCharcoal,
    inactiveTintColor:COLOR.secondary,
    labelStyle:{
    fontFamily: "IBMPlexSans-Medium",
    fontSize: 14,
    textAlign:"center",
    lineHeight:16
},
 } }
    >
      <Tab.Screen
        name="one"
        component={Hashback}
        options={{ tabBarLabel: 'Hashback ' }}
      />
      <Tab.Screen
        name="Suv"
        component={TabTwoScreen}
        options={{ tabBarLabel: 'Suv' }}
      />
      <Tab.Screen
        name="sedan"
        component={TabTwoScreen}
        options={{ tabBarLabel: 'sedan' }}
      />
    </Tab.Navigator>
  );
}
export default TopBar;
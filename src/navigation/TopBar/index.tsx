import React,{FC} from 'react';
import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';
import TabOneScreen from '../../screens/TabOneScreen';
import TabTwoScreen from '../../screens/TabTwoScreen';
import { tabProps } from '../../../types';
import { Link } from '@react-navigation/native';
import { Dimensions } from "react-native";
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
    style: { backgroundColor: '#ffff' , height:HEIGHT/12.1,
    width:WIDTH /1.1,},
    indicatorStyle:{ backgroundColor: "#C20000",width:WIDTH/3.3,textAlign:"center"},
    activeTintColor:"#313131",
    inactiveTintColor:"#979797",
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
        component={TabTwoScreen}
        options={{ tabBarLabel: 'Hashback ' }}
      />
      <Tab.Screen
        name="Suv"
        component={TabOneScreen}
        options={{ tabBarLabel: 'Suv' }}
      />
      <Tab.Screen
        name="sedan"
        component={TabOneScreen}

        options={{ tabBarLabel: 'sedan' }}
      />
      
    </Tab.Navigator>
  );
}
export default TopBar;
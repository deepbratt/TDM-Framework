// import * as React from 'react';
// import {FC} from 'react';
// import { NavigationContainer } from '@react-navigation/native';
// import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';
// import { TopTabProps } from '../../../types';

// const Tab = createMaterialTopTabNavigator();
// const CustomTopBar: FC<TopTabProps> = ({
//   tabBarOtions,
//   labelStyle,
//   style,
//   activeTintColor,
//   indicatorStyle,
//   name1,
//   name,
//   component1,
//   component,
// }) => {
//     return (
//       <Tab.Navigator
//           tabBarOptions={tabBarOtions}
//       >
//           <Tab.Screen name={name} component={component} />
//           <Tab.Screen name={name1} component={component1} />
//             </Tab.Navigator>
//   );
// }
// export default CustomTopBar


import React,{FC} from 'react';
import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';
import Specification from '../../screens/carDetails/specification';
import Features from '../../screens/carDetails/features';
import { widthPercentageToDP as wp, heightPercentageToDP as hp } from 'react-native-responsive-screen';

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

 const CustomTopBar:FC<Props>=(Props)=> {
  return (
    <Tab.Navigator
   initialRouteName="one"
   tabBarOptions={{
    style: { backgroundColor: '#ffff' , height:hp('6%'),
    width:wp('100%')},
    indicatorStyle:{ backgroundColor: "#62ADF4",textAlign:"center"},
    activeTintColor:"#313131",
    inactiveTintColor:"#313131",
    labelStyle:{
    fontFamily: "IBMPlexSans-Medium",
    fontSize: 12,
    textAlign:"center",
},
 } }
  
    >
      
      <Tab.Screen
        name="one"
        component={Specification}
        options={{ tabBarLabel: 'Specification' }}
      />
      <Tab.Screen
        name="Suv"
        component={Features}
        options={{ tabBarLabel: 'Features' }}
      />
      
    </Tab.Navigator>
  );
}
export default CustomTopBar;
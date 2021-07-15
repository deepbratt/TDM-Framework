import * as React from 'react';
import {FC} from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';
import { TopTabProps } from '../../../types';

const Tab = createMaterialTopTabNavigator();
const CustomTopBar: FC<TopTabProps> = ({
  tabBarOtions,
  labelStyle,
  style,
  activeTintColor,
  indicatorStyle,
  name1,
  name,
  component1,
  component,
}) => {
    return (
      <NavigationContainer>
      <Tab.Navigator
          tabBarOptions={tabBarOtions}
      >
          <Tab.Screen name={name} component={component} />
          <Tab.Screen name={name1} component={component1} />
            </Tab.Navigator>
            </NavigationContainer>
  );
}
export default CustomTopBar
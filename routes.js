import React from "react";
import { useSelector } from "react-redux";

import { createStackNavigator } from "@react-navigation/stack";
import { createDrawerNavigator } from "@react-navigation/drawer";
import { NavigationContainer } from "@react-navigation/native";
import { TouchableOpacity, View, Text, Image } from "react-native";
import TabNavigator from "./Component/CustomBottomTab";
import { SignIn, SignUp ,Settings,Verify,Home,RestPassword,RestPassword2} from './screens';


import { LinearGradient } from 'expo-linear-gradient';

const Routes = () => {
  const isLoggedIn = useSelector((state) => state.userReducer.isLoggedin);
  const Stack = createStackNavigator();
  const AppStack = createStackNavigator();

  const Drawers = createDrawerNavigator();

  function DrawerNavigator() {
    return (
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
          component={TabNavigator}
          options={{
            DrawerBarIcon: ({ focused }) => (
              <View
                style={{
                  top: 10,
                  alignItems: "center",
                  justifyContent: "center",
                }}
              >
                <TouchableOpacity
                  onPress={() => {
                    console.log("predss");
                  }}
                >
                  <Image
                    style={{ width: 30, height: 30 }}
                    resizeMode="contain"
                    source={require("./assets/bottomNavig/home.png")}
                    onPress={() => {
                      console.log("predss");
                    }}
                  ></Image>
                </TouchableOpacity>
                <Text
                  style={{
                    color: "white",
                    justifyContent: "center",
                    alignItems: "center",
                    color: "white",
                    fontSize: 10,
                  }}
                >
                  Verify screen
                </Text>
              </View>
            ),
          }}
        />
        <Drawers.Screen name="notification" component={Notification} />
        <Drawers.Screen name="SignIn" component={SignIn} />
        <Drawers.Screen name="SignUp" component={SignUp} />
        <Drawers.Screen name="Verify" component={Verify} />
      </Drawers.Navigator>
    );
  }

  function StackNavigator() {
    return (
      <Stack.Navigator
        screenOptions={{
          headerTransparent: true,
          headerTitle: null,
          headerLeft: null,
          headerShown: false,
        }}
      >
        <Stack.Screen name="SignIn" component={SignIn} />
        <Stack.Screen name="Verify" component={Verify} />
        <Stack.Screen name="SignUp" component={SignUp} />
        <Stack.Screen name="Home" component={Home} />
        <Stack.Screen name="ResetPassword" component={RestPassword} />
        <Stack.Screen name="RestPassword2" component={RestPassword2} />
      </Stack.Navigator>

    );
  }

  // function TabBarBottom(){
  //   return ( <LinearGradient colors={['#f5f5f5', '#DBDBDB']} start={[1, 0]} end={[0, 0]}>
  //   <TabNavigator  /> </LinearGradient> );
  // }
  
  return (
    <NavigationContainer>
      <AppStack.Navigator
        screenOptions={{
          headerTransparent: true,
          headerTitle: null,
          headerLeft: null,
          headerShown: false,
        }}
      >
        <AppStack.Screen name="BeforeLogin" component={StackNavigator} />
        <AppStack.Screen name="AfterLogin" component={DrawerNavigator} />
      </AppStack.Navigator>
    </NavigationContainer>
  );
};
export default Routes;

import React from "react";
import { Home, Page,SignIn, SignUp, SignUpLog, Verify,RestPassword2,RestPassword, Notification } from "../screens/index";
import { createBottomTabNavigator,BottomTabBar } from '@react-navigation/bottom-tabs';
import { LinearGradient } from 'expo-linear-gradient';
import { TouchableOpacity,StyleSheet, View,Text,Image,TouchableWithoutFeedback,SafeAreaView,ScrollView } from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import Tabs from "./Tabs.js"
 
const TabNavigator=({navigation})=> {
    const Tab = createBottomTabNavigator();
    return(
    <Tab.Navigator
    initialRouteName="Home"
    tabBarOptions={{
      showLabel:false,
      style:{  width: "100%",
            height: 70,
            backgroundColor:'#F04148',
            zIndex:2 }
    }}
          
    >
      <Tab.Screen name="Home" component={Home}
    options={{
      tabBarIcon:({focused})=>(
      <Tabs/>  )
    }}
    />
      <Tab.Screen name="notification" component={Notification}
    options={{
      tabBarIcon:({focused})=>(
        <TouchableOpacity
            style={styles.tabBar}
          >
           <Image
                style={{ width: 30, height: 30  }}
                resizeMode="contain"
                source={
                  require( "../assets/bottomNavig/notification.png")
                }
              ></Image>
            <Text style={styles.IconText}>
             Notification
            </Text>
          </TouchableOpacity>
      )
    }}
    />
      <Tab.Screen name="post" component={SignIn}   options={{
      tabBarIcon:({focused})=>(
        <TouchableOpacity
          style={{
            position: "absolute",
            alignSelf: "center",
            borderTopColor:"transparent",
            backgroundColor: "rgb(242,242,242)",
            width: 72,
            height: 72,
            borderRadius: 35,
            bottom: 35,
            zIndex: 10,
          }}
        >
          <TouchableWithoutFeedback>
          <LinearGradient colors={['#F04148', '#C20000']}
                               start={{x: 0, y: .4}} end={{x: 0, y: 1}}
                               style={{
    width: 56,
    height: 56,
    alignItems: "center",
    justifyContent: "center",
    shadowColor: "grey",
    shadowOpacity: 0.1,
    shadowOffset: { x: 2, y: 0 },
    shadowRadius: 2,
    borderRadius: 30,
    position: "absolute",
    bottom: 20,
    right: 0,
    top: 8,
    left: 8,
    shadowOpacity: 5.0,
  
 }} >
              <Image
                style={{ width: 50, }}
                resizeMode="contain"
                source={
                  require( "../assets/bottomNavig/plus.png")
                }
              />
         
            </LinearGradient>
          </TouchableWithoutFeedback>
        </TouchableOpacity>
      )
    }}/>
      <Tab.Screen name="chat" component={SignUp}   options={{
      tabBarIcon:({focused})=>(
        <TouchableOpacity
            style={styles.tabBar}
          >
            <TouchableOpacity
            onPress={()=>navigation.navigate("SignUp")}
            >
              <Image
                style={{ width: 30, height: 30  }}
                resizeMode="contain"
                source={
                  require( "../assets/bottomNavig/chat_bubble.png")
                }
              
              ></Image>
            </TouchableOpacity>
            <Text style={styles.IconText}>
              Chat
            </Text>
          </TouchableOpacity>
      )
    }}/>
      <Tab.Screen name="cart" component={SignUp}   options={{
      tabBarIcon:({focused})=>(
            <TouchableOpacity
              style={styles.tabBar}
            >
              <Image
                style={{ width: 30, height: 30  }}
                resizeMode="contain"
                source={
                  require( "../assets/bottomNavig/shopping_cart.png")
                }
              
              ></Image>
            
            <Text style={styles.IconText}>
              Cart
            </Text>
          </TouchableOpacity>
      )
    }}/>
    
    </Tab.Navigator>
    
  );
}
export default TabNavigator;
const styles = StyleSheet.create({
  tabBar: {
             top:0,
              alignItems: "center",
              justifyContent: "center",
            },
  IconText: { 
              color:"white",
      justifyContent: "center",
   alignItems: "center",
   color:"white",
   fontSize:10, 
},
});
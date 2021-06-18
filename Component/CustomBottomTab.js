import React from "react";
import { Home, Page,SignIn, SignUp, SignUpLog, Verify,RestPassword2,RestPassword, Notification } from "../screens/index";
import { createBottomTabNavigator,BottomTabBar } from '@react-navigation/bottom-tabs';
import { LinearGradient } from 'expo-linear-gradient';
import { TouchableOpacity, View,Text,Image,TouchableWithoutFeedback,SafeAreaView,ScrollView } from "react-native";


 
const TabNavigator=()=> {
    const Tab = createBottomTabNavigator();
    return(

    <Tab.Navigator
    tabBarOptions={{
      showLabel:false,
      style:{
        width: "100%",
            height: 70,
            backgroundColor:'#F04148' 
      }
    }}
    >
      <Tab.Screen name="Home" component={Home}
    options={{
      tabBarIcon:({focused})=>(
        <View style={{
             top:0,
              alignItems: "center",
              justifyContent: "center",
            }}
          >  
          <Image
                style={{ width: 30, height: 30  }}
                resizeMode="contain"
                source={
                  require( "../assets/bottomNavig/home.png")
                }
              ></Image>
            
            <Text style={{ 
              color:"white",
      justifyContent: "center",
   alignItems: "center",
   color:"white",
   fontSize:10, 
}}>
              Home
            </Text>
          </View>
      )
    }}
    />
      <Tab.Screen name="notification" component={Notification}
    options={{
      tabBarIcon:({focused})=>(
        <View
            style={{
             top:0,
              alignItems: "center",
              justifyContent: "center",
            }}
          >
           <Image
                style={{ width: 30, height: 30  }}
                resizeMode="contain"
                source={
                  require( "../assets/bottomNavig/notification.png")
                }
             
              ></Image>
         
            <Text style={{ 
              color:"white",
      justifyContent: "center",
   alignItems: "center",
   color:"white",
   fontSize:10, 
}}>
             Notification
            </Text>
          </View>
      )
    }}
    />
      <Tab.Screen name="post" component={SignIn}   options={{
      tabBarIcon:({focused})=>(
        <View
          style={{
            position: "absolute",
            alignSelf: "center",
            backgroundColor: "white",
            width: 70,
            height: 70,
            borderRadius: 35,
            bottom: 35,
            zIndex: 10,
          }}
        >
          <TouchableWithoutFeedback>
          <LinearGradient colors={['#F04148', '#C20000']}
                               start={{x: 0, y: .4}} end={{x: 0, y: 1}}
                               style={{
    width: 60,
    height: 60,
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
    top: 5,
    left: 5,
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
        </View>
      )
    }}/>
      <Tab.Screen name="chat" component={SignUpLog}   options={{
      tabBarIcon:({focused})=>(
        <View
            style={{
             top:10,
              alignItems: "center",
              justifyContent: "center",
            }}
          >
            <TouchableOpacity
             
            >
              <Image
                style={{ width: 30, height: 30  }}
                resizeMode="contain"
                source={
                  require( "../assets/bottomNavig/chat_bubble.png")
                }
              
              ></Image>
            </TouchableOpacity>
            <Text style={{ 
              color:"white",
      justifyContent: "center",
   alignItems: "center",
   color:"white",
   fontSize:10, 
}}>
              Chat
            </Text>
          </View>
      )
    }}/>
      <Tab.Screen name="cart" component={SignUp}   options={{
      tabBarIcon:({focused})=>(
        <View
            style={{
             top:10,
              alignItems: "center",
              justifyContent: "center",
            }}
          >
            <TouchableOpacity
             
            >
              <Image
                style={{ width: 30, height: 30  }}
                resizeMode="contain"
                source={
                  require( "../assets/bottomNavig/shopping_cart.png")
                }
              
              ></Image>
            </TouchableOpacity>
            <Text style={{ 
              color:"white",
      justifyContent: "center",
   alignItems: "center",
   color:"white",
   fontSize:10, 
}}>
              Cart
            </Text>
          </View>
      )
    }}/>
    
    </Tab.Navigator>
 
  );
}
export default TabNavigator;
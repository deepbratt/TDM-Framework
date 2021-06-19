import React from 'react'
import { TouchableOpacity,StyleSheet, View,Text,Image,TouchableWithoutFeedback,SafeAreaView,ScrollView } from "react-native";


const Tabs = () => {
    return (
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
}
export default Tabs;
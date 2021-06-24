import React from "react";
import {
  View,
 
  StyleSheet,
  Text,
} from "react-native";
import { Link } from "react-router-native";
import { MaterialIcons, MaterialCommunityIcons } from "@expo/vector-icons";
import { LinearGradient } from "expo-linear-gradient";
export const CustomBottomTab = () => {
    return (
          
        <LinearGradient
        colors={["#F04148", "#C20000"]}
        start={{ x: 0, y: 0.4 }}
        end={{ x: 0, y: 1 }}
        style={[styles.mainContainer,{ x:0,y:0,bottom:0}]}
      >
        <Link to="/" underlayColor="none">
          <View style={styles.flex}>
            <MaterialIcons name="home" size={24} color="white" />
            <Text style={styles.textIcon}>Home</Text>
          </View>
        </Link>
        <Link to="/page" underlayColor="none">
          <View style={[styles.flex,{marginLeft:20}]}>
            <MaterialIcons name="notifications" size={24} color="white" />
            <Text style={styles.textIcon}>Notification</Text>
          </View>
        </Link>
        <View style={styles.plusButton}>
        <LinearGradient
          colors={["#F04148", "#C20000"]}
          start={{ x: 0, y: 0.4 }}
          end={{ x: 0, y: 1 }}
          style={styles.button}
        >
         <Link to="/" underlayColor="none">
          <MaterialCommunityIcons name="plus" size={24} color="white" />
          </Link>
        </LinearGradient>
      </View>
        <Link to="/chat" underlayColor="none">
          <View
            style={{
              flexDirection: "column",
              alignItems: "center",
              justifyContent: "space-between",
              marginStart: 15,
            }}
          >
            <MaterialIcons
              name="chat-bubble"
              size={23}
              color="white"
              style={{ marginHorizontal: 6, width: 30, height: 30 }}
              containerStyle={{ marginHorizontal: 10 }}
            />

            <Text
              style={styles.textIcon}
            >
              Chat{" "}
            </Text>
          </View>
        </Link>
        <Link to="/cart" underlayColor="none">
          <View
            style={{
              flexDirection: "column",
              alignItems: "center",
              justifyContent: "flex-end",
            }}
          >
            <MaterialIcons
              name="shopping-cart"
              size={24}
              color="white"
              style={{ marginHorizontal: 36, width: 30, height: 30 }}
              containerStyle={{ marginHorizontal: 16 }}
            />
            <Text
              style={styles.textIcon}
            >
              Cart
            </Text>
          </View>
        </Link>
      </LinearGradient>
    )
}

const styles = StyleSheet.create({
  
    plusButton: {
      // position: "absolute",
      alignSelf: "center",
      backgroundColor: "white",
      width: 70,
      height: 70,
      borderRadius: 35,
      bottom: 35,
      zIndex: 10,
    },
    button: {
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
    },
    mainContainer: {
      position: "absolute",
      borderTopLeftRadius: 3,
      borderTopRightRadius: 3,
      shadowOpacity: 0.3,
      shadowRadius: 3,
      shadowOffset: {
        height: 3,
        width: 3,
      },
      width: "100%",
      height: 70,
      flexDirection: "row",
      justifyContent: "space-between",
      paddingVertical: 10,
      paddingHorizontal: 25,
    },
    flex: {
      flexDirection: "column",
      alignItems: "center",
      justifyContent: "center",
    },
    textIcon: { justifyContent: "center", alignItems: "center", color: "white" },
    actionBtn: {
      backgroundColor: "#1E90FF",
      textShadowOffset: { width: 5, height: 5 },
      textShadowRadius: 10,
      borderWidth: 2,
      borderColor: "#fff",
    },
  });
  
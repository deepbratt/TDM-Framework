import React from "react";
import { View, StyleSheet, Text } from "react-native";
import { Link } from "react-router-native";
import { MaterialIcons, MaterialCommunityIcons } from "@expo/vector-icons";
import { LinearGradient } from "expo-linear-gradient";
import { tabStyles } from "./style";
export const CustomBottomTab = () => {
  const { mainContainer, flex, textIcon, plusButton, button } = tabStyles;
  return (
    <LinearGradient
      colors={["#F04148", "#C20000"]}
      start={{ x: 0, y: 0.4 }}
      end={{ x: 0, y: 1 }}
      style={[mainContainer, { x: 0, y: 0, bottom: 0 }]}
    >
      <Link to="/" underlayColor="none">
        <View style={flex}>
          <MaterialIcons name="home" size={24} color="white" />
          <Text style={textIcon}>Home</Text>
        </View>
      </Link>
      <Link to="/page" underlayColor="none">
        <View style={[flex, { marginLeft: 20 }]}>
          <MaterialIcons name="notifications" size={24} color="white" />
          <Text style={textIcon}>Notification</Text>
        </View>
      </Link>
      <View style={plusButton}>
        <LinearGradient
          colors={["#F04148", "#C20000"]}
          start={{ x: 0, y: 0.4 }}
          end={{ x: 0, y: 1 }}
          style={button}
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

          <Text style={textIcon}>Chat </Text>
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
          <Text style={textIcon}>Cart</Text>
        </View>
      </Link>
    </LinearGradient>
  );
};

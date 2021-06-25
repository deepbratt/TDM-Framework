import { StatusBar } from "expo-status-bar";
import React from "react";
import { StyleSheet, Text, TouchableOpacity, View } from "react-native";
import CustomHeader from "../../Component/CustomHeader/CustomHeader";
import { NativeRouter, Route, Link } from "react-router-native";

export default function Page({navigation}) {
  return (
    <View style={styles.container}>
    
      <Text>This is your Page</Text>
      <TouchableOpacity style={{backgroundColor:"red" ,width:60,height:60}}>
        <Link to="/">
          <Text>
            Logout
          </Text>
        </Link>
      </TouchableOpacity>
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
});

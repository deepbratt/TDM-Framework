import { StatusBar } from "expo-status-bar";
import React from "react";
import { StyleSheet, Text, View } from "react-native";
import CustomHeader from "../../Component/CustomHeader";
export default function Home({navigation,}) {
  return (
    
    <View style={styles.container}>
    <CustomHeader isHome={true} title="Home" onPress={()=>navigation.openDrawer()}></CustomHeader>
    
      <Text> to start working on your app!</Text>
      <StatusBar style="auto" />

    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
  
  },
});

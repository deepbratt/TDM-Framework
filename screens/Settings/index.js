import React from "react";
import { LinearGradient } from "expo-linear-gradient";
import {
  TouchableOpacity,
  View,
  Text,
  Image,
  StyleSheet,
  TouchableWithoutFeedback,
  SafeAreaView,
  ScrollView,
} from "react-native";
import { sideBar } from "../../utils/en/BottomNavigation";
import { Avatar,Title, } from "react-native-paper";
import { Link } from "@react-navigation/native";

const Settings = (props) => {
  return (
    <View style={{ flex: 1, zIndex: 1 }}>
      <ScrollView>
        <View style={styles.container}>
          <View style={styles.section1}>
            <View style={styles.Image}>
              <Avatar.Image
                source={require("../../assets/sideBar/profile.png")}
              ></Avatar.Image>
            </View>
            <View style={{ width: "50%" }}>
              <View style={{ flexDirection: "row" }}>
                <Title>Alice Smith</Title>
                <Image
                  style={{ marginHorizontal: 5 }}
                  source={require("../../assets/sideBar/check.png")}
                />
              </View>
              <View style={{ flexDirection: "row", alignItems: "center" }}>
                <Image
                  style={styles.location}
                  source={require("../../assets/sideBar/location.png")}
                />
                <Text style={styles.locationText}>Islamabad</Text>
              </View>
              <Text style={styles.chngLocation}>Change location</Text>
            </View>
          </View>
        </View>
        <View style={{ marginTop: 15 }}>
          {sideBar.map((item) => {
            return (
            
              <TouchableOpacity
                onPress={() => {
                  props.navigation.navigate();
                }}
                key={item.id}
                style={styles.DrawerButton}
              >
             
                <LinearGradient
                  colors={["#F04148", "#C20000"]}
                  start={{ x: 0, y: 0.4 }}
                  end={{ x: 0, y: 1 }}
                  style={styles.LinearImage}
                >
                  <Image
                    style={{
                      marginHorizontal: 7,
                      width: item.width,
                      height: item.height,
                    }}
                    source={item.img}
                  />
                </LinearGradient>
                <View style={{ width: "50%" }}>
                  <View style={{ flexDirection: "row" }}>
                    <Title>{item.name}</Title>
                  </View>
                </View>
              </TouchableOpacity>
            
            );
          })}
        </View>
      </ScrollView>
    </View>
  );
};
export default Settings;

const styles = StyleSheet.create({
  container: {
    marginTop: 15,
    borderBottomWidth: 0,
  },
  section1: {
    marginVertical: 30,
    flexDirection: "row",
    width: "100%",
    height: 40,
  },
  Image: { 
      width: "20%",
   marginHorizontal: 20 
},
  location: { marginHorizontal: 5, width: 10, height: 13.5 },
  locationText: { fontWeight: "500", fontSize: 14 },
  chngLocation: { marginHorizontal: 20, fontSize: 12, color: "#3A82E2" },
  DrawerButton: {
    borderBottomColor: "rgba(190, 199, 197, 1)",
    marginHorizontal: 30,
    paddingVertical: 15,
    flexDirection: "row",
    width: "100%",
    borderBottomColor: "rgba(190, 199, 197, 1)",
    borderBottomWidth: 0.5,
  },
  LinearImage: {
    width: "20%",
    marginHorizontal: 5,
    marginRight: 20,
    backgroundColor: "red",
    justifyContent: "center",
    borderRadius: 4,
    color: "white",
    height: 30,
    width: 30,
  },
});

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
import { Avatar, Title } from "react-native-paper";
import { Link } from "@react-navigation/native";
import { styles } from "../../Component/CustomHeader/style";

const Settings = (props) => {
  const {
    container,
    Image,
    section1,
    location,
    locationText,
    chngLocation,
    DrawerButton,
    LinearImage,
  } = styles;
  return (
    <View style={{ flex: 1, zIndex: 1 }}>
      <ScrollView>
        <View style={container}>
          <View style={section1}>
            <View style={Image}>
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
                  style={location}
                  source={require("../../assets/sideBar/location.png")}
                />
                <Text style={locationText}>Islamabad</Text>
              </View>
              <Text style={chngLocation}>Change location</Text>
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
                style={DrawerButton}
              >
                <LinearGradient
                  colors={["#F04148", "#C20000"]}
                  start={{ x: 0, y: 0.4 }}
                  end={{ x: 0, y: 1 }}
                  style={LinearImage}
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

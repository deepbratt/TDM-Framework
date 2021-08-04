import React from "react";
import { LinearGradient } from "expo-linear-gradient";
import {
  TouchableOpacity,
  View,
  Text,
  Image,
  ScrollView,
} from "react-native";
import LottieView from 'lottie-react-native';
import { Avatar, Title } from "react-native-paper";
import { Link, useHistory } from "react-router-native";
import { styles } from "./style";
import { drawerItem } from "../../utils/constants/drawerContent";
import { Ionicons } from "@expo/vector-icons";
import { COLOR } from "../../Theme/Colors";
import { useDispatch } from "react-redux";
import { logout } from "../../redux/reducers/authSlice";

const Settings = (props:any) => {
  const {
    container,
    Images,
    Intro,
    Name,
    lottie,
    titleName,
    flexRow,
    Row,
    section1,
    locationText,
    chngLocation,
    DrawerButton,
    LinearImage,
  } = styles;

  let history = useHistory();
  const dispatch = useDispatch();
  const handle = () => {
    dispatch(logout());
    history.push("/SignIn");
    console.log("logout")

  }
  return (
    <View style={{ flex: 1, zIndex: 1 }}>
      <ScrollView>
        <View style={container}>
          <View style={section1}>
            <View style={Images}>
              <Avatar.Image
                source={require('../../../assets/images/drawer/profile.png')}
              ></Avatar.Image>
            </View>
            <View style={Intro}>
              <View style={Row }>
                <Title style={Name}>Alice Smith</Title>
                <LottieView
          style={lottie}
          autoPlay
          source={require('../../../assets/tick.json')}
                />
              </View>
              <View style={flexRow}>
              <Ionicons style={{marginTop: 3 }} name="location-sharp" size={14} color="black" />
                <Text style={locationText}>Islamabad</Text>
              </View>
              <Text style={chngLocation}>Change location</Text>
            </View>
          </View>
        </View>
        <View style={{ marginTop: 15 }}>
          {drawerItem.map((item) => {
            return (
              <Link
                key={item.id}
                style={DrawerButton}
                component={TouchableOpacity}
                to={item.link}
                onPress={item.onPress}
              >
                <LinearGradient
                  colors={[COLOR.CarminePink, COLOR.primary]}
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
                  <View style={Row}>
                    <Title style={titleName}>{item.name}</Title>
                  </View>
                </View>
              </Link>
            );
          })}
            <Link
                to=""
                style={DrawerButton}
                component={TouchableOpacity}
                onPress={handle}
              >
                <LinearGradient
                  colors={[COLOR.CarminePink, COLOR.primary]}
                  start={{ x: 0, y: 0.4 }}
                  end={{ x: 0, y: 1 }}
                  style={LinearImage}
                 
                >
                  <Image
                    style={{
                      marginHorizontal: 7,
                      width:"58%",height:"57%",
                    }}
                    source={require('../../../assets/images/drawer/logout.png')}
                  />
                </LinearGradient>
                <View style={{ width: "50%" }}>
                  <View style={Row}>
                    <Title style={titleName}>Logout</Title>
                  </View>
                </View>
              </Link>
        </View>
      </ScrollView>
    </View>
  );
};
export default Settings;

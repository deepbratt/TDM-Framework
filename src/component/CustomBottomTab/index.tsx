import React from "react";
import { View, Text, TouchableOpacity } from "react-native";
import { Link } from "react-router-native";
import { MaterialIcons, MaterialCommunityIcons } from "@expo/vector-icons";
import { LinearGradient } from "expo-linear-gradient";
import { tabStyles } from "./style";
import {  Chat, Favorites, Home, Notification } from "../../utils/constants/HomeConstant";
import { widthPercentageToDP as wp, heightPercentageToDP as hp } from 'react-native-responsive-screen';
import { COLOR } from "../../Theme/Colors";
 const CustomBottomTab = () => {
  const { mainContainer, flex, textIcon, plusButton, button } = tabStyles;
  return (
    <View style={{height:105,backgroundColor:"transparent"}}>
    <LinearGradient
      colors={[COLOR.CarminePink, COLOR.primary]}
      start={{ x: 0, y: 0.4 }}
      end={{ x: 0, y: 1 }}
      style={[mainContainer, { x: 0, y: 0, bottom: 0 }]}
    >
      <Link to="/" component={TouchableOpacity} underlayColor="none">
        <View style={flex}>
          <MaterialIcons name="home" size={24} color={COLOR.White} style={{ height: hp('4%')}} />
          <Text style={textIcon}>{Home}</Text>
        </View>
      </Link>
      <Link to="/one" component={TouchableOpacity} underlayColor="none">
        <View style={[flex, { marginLeft: 20}]}>
          <MaterialIcons name="notifications" size={24} color={COLOR.White} style={{ height: hp('4%')}} />
          <Text style={textIcon}>{Notification}</Text>
        </View>
      </Link>
      <View style={plusButton}>
        <LinearGradient
          colors={[COLOR.CarminePink,COLOR.primary]}
          start={{ x: 0, y: 0.4 }}
          end={{ x: 0, y: 1 }}
          style={button}
        >
          <Link to="/postad" component={TouchableOpacity} underlayColor="none">
            <MaterialCommunityIcons name="plus" size={24} color={COLOR.White} />
          </Link>
        </LinearGradient>
      </View>
      <Link to="/inbox" component={TouchableOpacity} underlayColor="none">
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
            size={22}
            color={COLOR.White}
            style={{ marginHorizontal: wp('3%'),  height: hp('4%')}}
            containerStyle={{ marginHorizontal: 10 }}
          />

          <Text style={textIcon}>{Chat} </Text>
        </View>
      </Link>
      <Link to="/find-car" component={TouchableOpacity} underlayColor="none">
        <View
          style={{
            flexDirection: "column",
            alignItems: "center",
            justifyContent: "flex-end",
          }}
        >
          <MaterialIcons
            name="star"
            size={24}
            color={COLOR.White}
            style={{ marginHorizontal:wp('8%'), height: hp('4%')}}
            containerStyle={{ marginHorizontal: 16 ,}}
          />
          <Text style={textIcon}>{Favorites}</Text>
        </View>
      </Link>
    </LinearGradient>
   </View>
  );
};
export default CustomBottomTab;

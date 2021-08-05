import React, { FC, useState } from "react";
import {
  View,
  Text,
  TouchableOpacity,
} from "react-native";
import DropDown from "../customDropDown/CustomDropDown";
import { styles } from "./style";
import { HeaderProps } from "../../../types";
import { MaterialIcons, AntDesign, Ionicons } from "@expo/vector-icons";
import { Link } from "react-router-native";
import { Appbar } from "react-native-paper";

const CustomHeader: FC<HeaderProps> = ({ title, onPress, location, isHome, headerStyle, color }) => {
  const { container, item, text, item2, item3 } = styles;
  return (
    <Appbar style={[container, headerStyle]}>
      <TouchableOpacity onPress={onPress} style={item}>
        {
          isHome ?
            <MaterialIcons name="menu" size={30} color={color} />
            :
            <AntDesign name="arrowleft" size={30} color={color} />
        }

      </TouchableOpacity>

      {title && <Appbar.Content style={item2} titleStyle={text} title={title}  /> }
      
      {location && <View style={item2}><DropDown textcolor={{ color: color }} 
      color={color}
            />
      </View>}
      <Link component={TouchableOpacity} to="/post-details" style={item3}>
      <Ionicons name="person-circle" size={30} color={color} />
      </Link>
    </Appbar>
  );
};
export default CustomHeader;

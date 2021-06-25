import * as React from "react";
import { Appbar } from "react-native-paper";
import {
  StyleSheet,
  View,
  Text,
  Image,
  TouchableOpacity,
  Dimensions,
} from "react-native";
import DropDown from "../CustomDropDown/CustomDropDown";
import { styles } from "./style";

const CustomHeader = ({ title, onPress, location, isHome, headerStyle }) => {
  const { container, item, Text, item2, item3 } = styles;
  const _handleMore = () => console.log("Shown more");
  const HEIGHT = Dimensions.get("window").height;
  const WIDTH = Dimensions.get("window").width;

  return (
    <View style={[container, headerStyle]}>
      <TouchableOpacity onPress={onPress} style={item}>
        <Image
          style={{ width: 25, height: 19 }}
          source={
            isHome
              ? require("../../assets/sideBar/menu.png")
              : require("../../assets/sideBar/profiles.png")
          }
        />
      </TouchableOpacity>
      {title && (
        <View onPress={_handleMore} style={item2}>
          <Text style={Text}>{title}</Text>
        </View>
      )}
      {location && <DropDown />}

      <View onPress={_handleMore} style={item3}>
        <Image
          style={{ width: 25, height: 25 }}
          source={require("../../assets/sideBar/profiles.png")}
        />
      </View>
    </View>
  );
};
export default CustomHeader;

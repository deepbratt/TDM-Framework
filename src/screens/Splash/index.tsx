import React from "react";
import { View, Image} from "react-native";


import { styles } from "./style";
const Splash = () => {
  const {root, container, splashText, image } = styles;
  return (
    <View style={root}>
      <View style={container}>
        <Image
          style={image}
          source={require("../../../assets/images/logo.png")}
        />
      </View>
    </View>
  );
};
export default Splash;

import React, { FC, useState } from "react";
import { Appbar } from "react-native-paper";
import {View,Text,TouchableOpacity,} from "react-native";
import DropDown from "../CustomDropDown/CustomDropDown";
import { styles } from "./style";
import { HeaderProps } from "../../../types";
import { MaterialIcons, AntDesign, Ionicons } from "@expo/vector-icons";

const CustomHeader: FC<HeaderProps> = ({ title, onPress, location, isHome, headerStyle, color, }) => {
  const { container, item, text, item2, item3 } = styles;
  const _handleMore = () => console.log("Shown more");
  const [showDropDown, setShowDropDown] = useState(false);
  const [chooseData, setchooseData] = useState('Select City');
  const VisbilityChange = (bool: boolean | ((prevState: boolean) => boolean)) => {
    setShowDropDown(bool)
  }
  const Dataset = (option: React.SetStateAction<string>) => {
    setchooseData(option)
    console.log("drop",option)
  }
  return (
    <View style={[container, headerStyle]}>
      <TouchableOpacity onPress={onPress} style={item}>
        {
          isHome ?
            <MaterialIcons name="menu" size={30} color={color} />
            :
            <AntDesign name="arrowleft" size={30} color={color} />
        }

      </TouchableOpacity>

      {title && <View style={item2}>
        <Text style={text}>{title}</Text>
      </View>}

      {location && <View style={item2}><DropDown textcolor={{ color: color }} 
      color={color} FirstState={chooseData} 
        onRequestClose={ () => VisbilityChange(false)}
           changeVisbilities={VisbilityChange}
            onPress={ () => VisbilityChange(true)}
            setValues={Dataset}
            location={true}
            visible={showDropDown}
            />
      </View>}

      <View onPress={_handleMore} style={item3}>
        <Ionicons name="person-circle" size={30} color={color} />
      </View>
    </View>
  );
};
export default CustomHeader;

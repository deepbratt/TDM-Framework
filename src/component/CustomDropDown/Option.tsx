import React, { FC } from "react";
import {
  TouchableOpacity,
  View,
  ScrollView,
  Text,
  Dimensions,
} from "react-native";
import { DropDownProps } from "../../../types";
import { optStyles } from "./Optionstyles";
import { Locationlist } from "../../utils/constants/en";
const Option: FC<DropDownProps> = ({ changeVisbility, setData, }) => {

  const onPressItem = (option: string) => {
    changeVisbility(false);
    setData(option);
  };
  const option =
    Locationlist.map((item) => ( //here LocationList is array wich show my list item you can style your list here like that 
      <TouchableOpacity
        key={item.id}
        style={optStyles.option}
        onPress={() => onPressItem(item.label)}
      >
        <Text style={optStyles.text}>{item.label}</Text>
      </TouchableOpacity>)

    );
  const HEIGHT = Dimensions.get("window").height;
  const WIDTH = Dimensions.get("window").width;

  return (
    <TouchableOpacity
      onPress={() => changeVisbility} 
      style={optStyles.container}
    >
      <View style={[optStyles.modal, { width: WIDTH - 190, height: HEIGHT / 3 }]} //here you can set position  of your dropdown list 
      >  

        <ScrollView>{option}</ScrollView>
      </View>
    </TouchableOpacity>

  );
};

export default Option;
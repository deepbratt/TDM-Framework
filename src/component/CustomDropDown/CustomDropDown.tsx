import React, { useState, FC } from "react";
import Option from './Option';
import { DropDownProps } from "../../../types";
import { View, Modal, TouchableOpacity, Text } from "react-native";
import { MaterialIcons, Ionicons, } from "@expo/vector-icons";
import { dropdownStyle } from "./style";

const DropDown: FC<DropDownProps> = ({ color, textcolor, }) => {

  const [showDropDown, setShowDropDown] = useState(false);
  const [chooseData, setchooseData] = useState('Select City');
  const changeVisbility = (bool: boolean | ((prevState: boolean) => boolean)) => {
    setShowDropDown(bool)
  }
  const setData = (option: React.SetStateAction<string>) => {
    setchooseData(option)
  }
  return (

    <View style={dropdownStyle.containerStyle}>
      <TouchableOpacity style={dropdownStyle.touchableOpacity} onPress={() => changeVisbility(true)}>
        <Ionicons style={{marginTop: 3 }} name="location-sharp" size={14} color={color} />
        <Text style={[dropdownStyle.text, textcolor]} >
          {chooseData}
        </Text>
        <MaterialIcons style={{ marginTop: 3 }} name="keyboard-arrow-down" size={25} color={color} />
      </TouchableOpacity>
      <TouchableOpacity style={dropdownStyle.changeView}>
        <Text style={[dropdownStyle.changetext, textcolor]}>Change location</Text>
      </TouchableOpacity>
      <Modal
        animationType="none"
        visible={showDropDown}
        transparent={true}
        onRequestClose={() => changeVisbility(false)}
      >
        <Option
          changeVisbility={changeVisbility}
          setData={setData}
        />

      </Modal>
    </View>

  );
}
export default DropDown;
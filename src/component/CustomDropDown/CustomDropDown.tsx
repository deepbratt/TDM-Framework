
import React, { useState, FC } from "react";
import Option from './Option';
import { DropDownProps } from "../../../types";
import { View, Modal, TouchableOpacity, Text } from "react-native";
import { MaterialIcons, Ionicons, } from "@expo/vector-icons";
import { dropdownStyle } from "./style";

const DropDown: FC<DropDownProps> = ({ color, textcolor,FirstState,onRequestClose,onPress,location,visible,changeVisbilities,setValues}) => {

 
  return (

    <View style={dropdownStyle.containerStyle}>

     {location && 
      <TouchableOpacity style={dropdownStyle.touchableOpacity} onPress={onPress}>
        <Ionicons style={{marginTop: 3 }} name="location-sharp" size={14} color={color} />
        <Text style={[dropdownStyle.text, textcolor]} >
          {FirstState}
        </Text>
        <MaterialIcons style={{ marginTop: 3 }} name="keyboard-arrow-down" size={25} color={color} />
      </TouchableOpacity>
     }
      {
        location && 
        <TouchableOpacity style={dropdownStyle.changeView}>
        <Text style={[dropdownStyle.changetext, textcolor]}>Change location</Text>
      </TouchableOpacity>
      }
        {/* create here for filter search what do you want to show for first 
       example such as
       {
         filter && <TouchableOpacity style={dropdownStyle.touchableOpacity} onPress={onPress}>
        <Text style={[dropdownStyle.text, textcolor]} >
          {yourState} // this will be your firststate such as All
        </Text>
        <MaterialIcons style={{ marginTop: 3 }} name="keyboard-arrow-down" size={25} color={color} />
      </TouchableOpacity>
       }
      
       */}
      <Modal
        animationType="none"
        visible={visible}
        transparent={true}
        onRequestClose={onRequestClose}
      >
       {/* create here for filter search another option component and pass these parameter of fuction same as below ...please use different name  
       example such as
       {
         filter && <yourDropdownlistcomponent  visiblity ={checkvisibilty} listItem={selectItem}/>
       }
      
       */}
       { location && <Option
          changeVisbility={changeVisbilities}
          setData={setValues}
        />
       }
      </Modal>
    </View>

  );
}
export default DropDown;
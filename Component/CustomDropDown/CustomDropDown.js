
import React, { useState } from "react";
import {  TextInput } from "react-native-paper";
import Option from './Option';
import { View,Modal, StyleSheet,Dimensions, TouchableOpacity ,Text } from "react-native";
import { MaterialIcons, MaterialCommunityIcons } from "@expo/vector-icons";
const HEIGHT = Dimensions.get("window").height;
const WIDTH = Dimensions.get("window").width;

const DropDown=()=> {
  const [showDropDown, setShowDropDown] = useState(false);
  const [chooseData, setchooseData] = useState('Country');
const changeVisbility =(bool)=>{
  setShowDropDown(bool)
} 

const setData =(option)=>{
  setchooseData(option)
} 
  return (
   
      <View style={styles.containerStyle}>
      <TouchableOpacity style={styles.touchableOpacity} onPress={() => changeVisbility(true)}>
        <Text style={styles.text}>
        {chooseData}
        </Text>
        <MaterialIcons name="keyboard-arrow-down" size={29} color="black" />
      </TouchableOpacity>
        <Modal
        transpareny={true}
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

const styles = StyleSheet.create({
  containerStyle: {
   width:WIDTH-120,
    justifyContent: "center",
  },
  text:{
    color:"black",
marginVertical:10,
fontSize:17,
  },
 
  touchableOpacity:{
    justifyContent: "center",
    flexDirection:"row",
    alignItems:"center",
    alignSelf:"stretch",
    paddingHorizontal:20,
    marginHorizontal:20
  }
});

export default DropDown;
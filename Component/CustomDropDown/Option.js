import React from "react";
import {

  StyleSheet,
  TouchableOpacity,
  View,
  ScrollView,
  Text,
  Dimensions,
} from "react-native";
import {optStyles} from "./Optionstyles";

  const Option = ({changeVisbility,setData}) => {
    const list = [
      { id: 1,label: "Islamabad", value: "Islamabad" },
      {id: 2, label: "Lahore", value: "Lahore" },
      {id: 3, label: "Bahawalpur", value: "Bahawalpur" },
      { id: 4,label: "Others", value: "others" },
    ];
    const onPressItem = (option) => {
      changeVisbility(false);
      setData(option);
    };
    const option = list.map((item) =>  <TouchableOpacity
          key={item.id}
          style={optStyles.option}
          onPress={() => onPressItem(item.label)}
        >
          <Text style={optStyles.text}>{item.label}</Text>
        </TouchableOpacity>
     
    );
    const HEIGHT = Dimensions.get("window").height;
    const WIDTH = Dimensions.get("window").width;
  
    return (
      <TouchableOpacity
        onPress={() => changeVisbility}
        style={optStyles.container}
      >
        <View style={[optStyles.modal, { width: WIDTH - 190, height: HEIGHT / 3 }]}>
       
          <ScrollView>{option}</ScrollView>
        </View>
      </TouchableOpacity>
  
  );
};

export default Option;
import React from "react";
import {

  StyleSheet,
  TouchableOpacity,
  View,
  ScrollView,
  Text,
  Dimensions,
} from "react-native";


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
          style={styles.option}
          onPress={() => onPressItem(item.label)}
        >
          <Text style={styles.text}>{item.label}</Text>
        </TouchableOpacity>
     
    );
    const HEIGHT = Dimensions.get("window").height;
    const WIDTH = Dimensions.get("window").width;
  
    return (
      <TouchableOpacity
        onPress={() => changeVisbility}
        style={styles.container}
      >
        <View style={[styles.modal, { width: WIDTH - 190, height: HEIGHT / 3 }]}>
       
          <ScrollView>{option}</ScrollView>
        </View>
      </TouchableOpacity>
  
  );
};
const styles = StyleSheet.create({
  container: {
    justifyContent: "center",
    alignItems:"center",
  },
  modalView: {
    margin: 20,
    backgroundColor: "white",
    borderRadius: 20,
    padding: 35,
    alignItems: "center",
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 2
    },
    shadowOpacity: 0.25,
    shadowRadius: 4,
    elevation: 5
  },
  modal: {
    margin: 45,
    padding: 1,
    borderRadius: 20,
    backgroundColor: "white",
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 2
    },
    shadowOpacity: 0.25,
    shadowRadius: 2,
    elevation: 1,
    borderRadius: 2,
  },
  option: {
    alignItems: "flex-start",
    borderBottomColor:"#000",
    borderBottomWidth:.4,
  },
  text: {
    margin: 20,
   
  },

});
export default Option;
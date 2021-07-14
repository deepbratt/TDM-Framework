import { StyleSheet, Dimensions } from "react-native";
const HEIGHT = Dimensions.get("window").height;
const WIDTH = Dimensions.get("window").width;
export const boxStyle = StyleSheet.create({
container:{
    width: 101,
height: 98,
borderRadius: 6,
justifyContent:"space-evenly",
alignItems:"center"
},
image:{ width: 50, height: 50 },
title:{
    fontFamily: "IBMPlexSans-Medium",
    fontSize: 14,
   
}

});

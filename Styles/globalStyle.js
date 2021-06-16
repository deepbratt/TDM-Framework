import { StyleSheet, Dimensions } from "react-native";
import { color } from "react-native-reanimated";

export const globalStyle = StyleSheet.create({

container:{
flex:1,
justifyContent:"center",

},
top: {
    flex: 1,
    justifyContent: "flex-start",
    marginTop: 56,
  },
  mid: {
    flex: 2,
    justifyContent: "center",
    marginTop: 0,
  },
  bottom: {
    flex: 1,
    justifyContent: "flex-end",
    marginBottom: 26,
  },


});
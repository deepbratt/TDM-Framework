import { StyleSheet, Dimensions } from "react-native";
const HEIGHT = Dimensions.get("window").height;
const WIDTH = Dimensions.get("window").width;
export const Style = StyleSheet.create({
container:{
    backgroundColor: "#ffff",
    borderRadius: 6,
    height: HEIGHT/3.1,
    marginLeft: 5,
    marginRight: 5,
  },
images:{ width: "100%", height: WIDTH/2.4, borderRadius: 6, },
titleText:{
    fontFamily: "IBMPlexSans-Medium",
    fontSize: 14,
    marginTop:4,
   lineHeight:20,
   color:"#C20000"
},
detail:{
    fontFamily: "IBMPlexSans-Medium",
    fontSize: 14,
   lineHeight:19,
   color:"#666666"
   
},
rate:{
    width:15,
    height:15,
},
rating:{
    fontFamily: "IBMPlexSans-Light",
    fontSize: 10,
   lineHeight:13,
   color:"#666666",
   marginLeft:5
   
}
});

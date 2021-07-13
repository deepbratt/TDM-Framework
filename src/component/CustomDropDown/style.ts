import { StyleSheet,Dimensions } from "react-native";
const HEIGHT = Dimensions.get("window").height;
const WIDTH = Dimensions.get("window").width;
export const dropdownStyle = StyleSheet.create({
    containerStyle: {
        width:WIDTH-200,
         alignItems:"center",
        
       },
       text:{
         textAlign:"center",
         fontFamily: "IBMPlexSans-Medium",
         marginHorizontal:1,
     fontSize:14,
       },
       changetext:{
         width:100,
         marginHorizontal:-6,
         marginVertical:-5,
         fontFamily: "IBMPlexSans-Light",
         fontSize:9,
         textAlign:"left"
           },
       touchableOpacity:{
         justifyContent: "center",
         flexDirection:"row",
         alignItems:"center",
         alignSelf:"stretch",
         paddingHorizontal:20,
         marginHorizontal:20
       },
       changeView:{ width: 70 }
  });

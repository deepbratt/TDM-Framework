import { StyleSheet, Dimensions } from "react-native";
const HEIGHT = Dimensions.get("window").height;
const WIDTH = Dimensions.get("window").width;
import { widthPercentageToDP as wp, heightPercentageToDP as hp } from 'react-native-responsive-screen';
export const boxStyle = StyleSheet.create({
container:{
    width: wp('28.7%'),
    height: hp('13.5%'),
    borderRadius: 6,
    justifyContent:"space-evenly",
    alignItems:"center"
},
image:{
     width: wp('14%'),
     height: hp('7%'),
     },
title:{
    fontFamily: "IBMPlexSans-Medium",
    fontSize: 14,
   
}

});

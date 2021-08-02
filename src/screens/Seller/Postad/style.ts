import { StyleSheet } from "react-native";
import { widthPercentageToDP as wp, heightPercentageToDP as hp } from 'react-native-responsive-screen';
import { COLOR } from "../../../Theme/Colors";

export const postAdStyle = StyleSheet.create({
  
    title:{
        textAlign:"center", 
         fontFamily: "IBMPlexSans-Medium",
    fontSize: 20,
    color:COLOR.DarkCharcoal, 
    lineHeight:25,
    marginTop:hp('7%'),
    marginBottom:hp('2.5%'),
},
Flex:{
    flex:1,
    justifyContent:"space-around",
    alignItems:"center"
},
    boxstyle:{
        width: wp('31.7%'),
        height: hp('16.5%'),
},


});

import { StyleSheet } from "react-native";
import { widthPercentageToDP as wp, heightPercentageToDP as hp } from 'react-native-responsive-screen';

export const sectionStyle = StyleSheet.create({
titleView:{
    marginTop:hp('1%'),
    marginHorizontal:wp('4.6%'), 
    marginBottom:hp('2%'),
},
title:{
    textAlign:"left",
    fontFamily: "IBMPlexSans-Medium",
    fontSize:18,
},
subTitle:{
    fontFamily: "IBMPlexSans-Light",
    color:"#666666",
    fontSize:12,
    lineHeight:25,
    textAlign:"left",
},
});

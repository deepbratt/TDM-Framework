import { StyleSheet } from "react-native";
import { widthPercentageToDP as wp, heightPercentageToDP as hp } from 'react-native-responsive-screen';
import { COLOR } from "../../Theme/Colors";
export const Style = StyleSheet.create({
container:{
    backgroundColor: COLOR.White,
    borderRadius: 6,
    height: hp('30%'), 
    marginLeft: wp('1.2%'),
    marginRight: wp('1.2%'),
  },
images:{
    marginTop:hp('1%'),
     width: "100%", 
     height:hp('20.5%'), 
     borderRadius: 6,
     },
titleText:{
    fontFamily: "IBMPlexSans-Medium",
    fontSize: 14,
    marginTop:wp('1%'),
   lineHeight:20,
   color:COLOR.primary
},
detail:{
    fontFamily: "IBMPlexSans-Medium",
    fontSize: 14,
   lineHeight:19,
   color:COLOR.GraniteGray
},
rate:{
    width:wp('5%'), 
    height:hp('2%'),
},
rating:{
    fontFamily: "IBMPlexSans-Light",
    fontSize: 10,
   lineHeight:13,
   color:COLOR.GraniteGray,
   marginLeft:wp('1%'), 
}
});

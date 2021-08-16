import { StyleSheet } from "react-native";
import { widthPercentageToDP as wp, heightPercentageToDP as hp } from 'react-native-responsive-screen';
import { COLOR } from "../../Theme/Colors";

export const HomeStyle = StyleSheet.create({
title:{
    textAlign:"left",
    fontFamily: "IBMPlexSans-Medium",
    marginTop:hp('1%'),
    marginHorizontal:wp('4.6%'), 
    marginBottom:hp('3%'),
    fontSize:18,
},
categoryBox:{
    flexDirection:"row",
    justifyContent:"space-around"
},
sellView:{
    width:wp('55%'), //200
    position:"absolute",
    left:"41%",
    top:"8%"},
    carsView:{
    flexDirection:"row",
    paddingVertical:  hp('2%'), //15
    marginVertical: hp('2%'),
    backgroundColor:COLOR.Bubbles
},
head:{
    fontFamily: "IBMPlexSans-Medium",
    color:COLOR.primary,
    fontSize:18,
    lineHeight:23,
    textAlign:"right"
},
bannerimage:{
   width:wp('63%'), //240
   height:hp('21%'), //150
},
divSize:{
    width: wp('28.7%'),
    height: hp('13.5%'),
},
buttonView:{
    alignItems:"flex-end",
    justifyContent:"center",
    marginVertical:hp('4.2%'), 
},
button:{
    backgroundColor: COLOR.YellowOrange,
    borderRadius: 6,
    width:wp('28%'),
    height:hp('5%'), 
    justifyContent:"center",
    alignItems:"center"
},
buttonText:{
    fontFamily: "IBMPlexSans-Medium",
    color:COLOR.White,
    fontSize:14,
    lineHeight:18,
},
paragraph:{
    fontFamily: "IBMPlexSans-Light",
    color:COLOR.GraniteGray,
    fontSize:14,
    textAlign:"right"
},
surfaceMargin:{
          marginVertical: 7,
          height:hp('35%'), 
          justifyContent: "center",
         alignItems: "center",
         width:wp("100%"),
         backgroundColor:COLOR.background 
        },
VerticalMargin:{
     marginVertical:hp('2%'), 
    },

});

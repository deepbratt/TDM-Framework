import { StyleSheet } from "react-native";
import { widthPercentageToDP as wp, heightPercentageToDP as hp } from 'react-native-responsive-screen';
import { COLOR } from "../Theme/Colors";

export const globalStyle = StyleSheet.create({
container:{
    flex:1,
    backgroundColor:COLOR.background,
},
inputView:{
    flex:1,
    justifyContent:"center",
    alignItems:"center",
    marginTop:hp('3%'),
    marginBottom:hp('1%')
},
searchStyle:{
    height:hp('8%'), 
    width:wp('91%'), 
    backgroundColor: COLOR.LightGrey,
    borderRadius: 6,
},
helperText:{
    textAlign:"left",
    width:wp('70%'),
    fontSize:12,
    lineHeight:10,
    // backgroundColor:"red"
},
activeField:{
    marginVertical:8,
    width: wp('71%'),
    height:hp('6%'),
    backgroundColor: COLOR.White,
    borderColor:COLOR.primary,
    borderWidth:2,
    borderRadius: 2,
},
inputField:{
   marginVertical:8,
   width:wp('71%'),
   height:hp('6%'),
   backgroundColor: COLOR.White,
   borderColor:COLOR.DarkCharcoal,
   borderWidth:2,
   borderRadius: 2,
},
SignInButton:{
    width: wp('58%'),
    height:hp('6.3%'),
    borderColor:COLOR.primary,
    borderWidth:2,
    flexDirection:"row",
   alignItems:"center",
   justifyContent:"center",
   borderRadius:6,
    
},
loginText:{
    fontFamily: "IBMPlexSans-Medium",
    fontSize: 14,
    textAlign: "center",
    lineHeight: 17,
    color: COLOR.primary,
  
},
forgetButton:{
    marginTop:hp('3%'),
      alignItems:"center",
      justifyContent:"center",
    },
    forgetText:{
      fontFamily: "IBMPlexSans-Medium",
      fontSize: 14,
      textAlign: "center",
      lineHeight: 24,
      color: COLOR.ChineseSilver,
    },

    flexRow:{
        flexDirection: "row",
        justifyContent: "space-between",
        marginVertical:8 },
  
    activeStyle:{
        marginLeft:wp('2%'),  
        width:wp('49%'), 
        height:hp('6.1%'), 
        backgroundColor:COLOR.primary,
        borderRadius:22,
        justifyContent:"center"
    },
    inActiveStyle:{
        marginLeft: wp('2%'),  
        width:wp('49%'),  
        height:hp('6.1%'), 
        backgroundColor:COLOR.LightGrey,
        borderRadius:22,
        justifyContent:"center"
    },
    activeText:{
        fontFamily: "IBMPlexSans-Regular",
        fontSize: 14,
        letterSpacing: .6,
        lineHeight: 20,
        textAlign: "center",
        color: COLOR.White,
      },
      inActiveText:{
        fontFamily: "IBMPlexSans-Regular",
        fontSize: 14,
        letterSpacing: .6,
        lineHeight: 20,
        textAlign: "center",
        color: COLOR.DarkCharcoal,
      }
});

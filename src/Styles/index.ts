import { StyleSheet } from "react-native";
import { widthPercentageToDP as wp, heightPercentageToDP as hp } from 'react-native-responsive-screen';

export const globalStyle = StyleSheet.create({
container:{
    flex:1,
    backgroundColor:"#E5E5E5",
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
    backgroundColor: "rgba(33, 33, 33, 0.08)",
    borderRadius: 6,
},
activeField:{
    marginVertical:10,
    width: wp('71%'),
    height:hp('6%'),
    backgroundColor: "#FFFFFF",
    borderColor:"#C20000",
    borderWidth:2,
    borderRadius: 2,
},
inputField:{
   marginVertical:10,
   width:wp('71%'),
   height:hp('6%'),
   backgroundColor: "#FFFFFF",
   borderColor:"rgba(49, 49, 49, 1)",
   borderWidth:2,
   borderRadius: 2,
},
SignInButton:{
    width: wp('58%'),
    height:hp('6.3%'),
    borderColor:"#C20000",
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
    color: "#C20000",
  
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
      color: "#CCCC",
    },


});

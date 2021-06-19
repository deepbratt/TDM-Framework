import { StyleSheet, Dimensions } from "react-native";
import { color } from "react-native-reanimated";

export const resetStyle = StyleSheet.create({

container:{
flex:1,
justifyContent:"center",
},
nav:{
    flex: 1,
    justifyContent: "flex-end",
    alignItems:"flex-start",
     marginTop: 0,
     width:100,
     marginHorizontal: 10,
 
},
Avataricon:{
    backgroundColor:"rgba(194, 0, 0, 1)",
    marginVertical: 10,
    
  
},
headText: {
    fontFamily: "IBMPlexSans-SemiBold",
    color: "#313131",
    fontWeight: "600",
    fontSize: 18,
    lineHeight: 45,
    textAlign: "center",
  },
  detail: {
    fontFamily: "IBMPlexSans-Light",
    fontSize: 14,
    fontWeight:"300",
    textAlign: "center",
    color: "rgba(102, 102, 102, 1)",
    letterSpacing: 1,
  },
  top: {
    flex: 1,
    justifyContent: "flex-start",
    marginTop: 0,
  },
  mid: {
    flex: 5,
    justifyContent: "flex-start",
    alignItems:"center",
    marginTop: 0,
 
  },
card:{
    justifyContent: "center",
    alignItems:"center",
    height:146,
    width:306,
    borderRadius:11,
    backgroundColor:"white",
  
    borderColor:"rgba(26, 117, 255, 1)",
    elevation:5,
    shadowColor: '#CCCCCC',
    shadowOffset: { width: 0, height: 1 },
    shadowOpacity: 0.2,
    shadowRadius: 14,  
    marginVertical:10
},
Content:{
    justifyContent:"center",
    alignItems:"center",
    borderRadius:11,
   
   
}
,icon:{
width:30,
height: 50,

},
card2:{
    justifyContent: "center",
    alignItems:"center",
    height:146,
    width:306,
    borderRadius:11,
    backgroundColor:"white",
    elevation:5,
    shadowColor: '#CCCCCC',
    shadowOffset: { width: 0, height: 1 },
    shadowOpacity: 0.2,
    shadowRadius: 14, 
    marginVertical:10 
    
},
bottom: {
  flex: 1,
  justifyContent: "center",
  marginBottom: 26,
 
},
loginButton:{
  marginHorizontal: 20,
    width: 315,
height:58,
flexDirection:"row",
alignItems:"center",
    justifyContent:"center",
    borderRadius:6,
    elevation:4,
    shadowColor: 'rgba(15, 218, 137, 0.3)',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.2,
    shadowRadius: 4, 
},
loginText:{
    fontFamily: "IBMPlexSans-Medium",
    fontSize: 16,
    fontWeight:"500",
    textAlign: "center",
    lineHeight: 16,
    color: "#FFFFFF",
    letterSpacing: 1,
    marginHorizontal:6
},
modal:{
    width:360,
    height:263,
   backgroundColor:"white",
borderTopLeftRadius:24,
borderTopRightRadius:24,
marginTop:0,
marginBottom:0,
marginLeft:0,
marginRight:0,
alignItems:"center",
    justifyContent:"center",

},
emailDigit: {
  fontFamily: "IBMPlexSans-Regular",
  fontSize: 14,
  fontWeight:"500",
  textAlign: "center",
  color: "rgba(102, 102, 102, 1)",

},
digitBox:{
   flexDirection:"row",
    marginHorizontal:20,
    marginVertical:10,
 },
 display:{
    alignItems:"center",
    justifyContent:"center",
    borderColor: "#475E69",
    borderBottomWidth:1,
marginHorizontal:10,
  width: 66,
},
otpText: {
    textAlign:"center",
    fontWeight: '500',
    lineHeight:26,
    color: "#313131",
    fontSize: 24,
    width: '100%',
  },
digit:{
   marginHorizontal:20,
   marginVertical:10,
},
digitalText:{
    fontFamily: "IBMPlexSans-Regular",
    fontSize: 16,
    fontWeight:"normal",
    textAlign: "left",
    lineHeight: 22,
    color: "#96A7AF",
    marginHorizontal:6,
    marginVertical:15,
}
});
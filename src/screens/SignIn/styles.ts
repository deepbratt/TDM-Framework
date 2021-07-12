import { StyleSheet, Dimensions } from "react-native";
export const loginStyle = StyleSheet.create({

  mid: {
    flex: 2,
    justifyContent: "center",
    marginTop: 0,
  },
  img: {
    marginHorizontal: 30,
    marginVertical: 20,
    width: 300,
   
    aspectRatio:1*1.4,
    padding: 0,
  },
  SignInButton:{
    width: 210,
height:45,
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
inputField:{
  marginVertical:10,
  width: 258,
height: 40,
backgroundColor: "#FFFFFF",
borderColor:"#C20000",
  borderWidth:2,
borderRadius: 2,
},
activeField:{
  marginVertical:10,
  width: 258,
height: 40,
backgroundColor: "#FFFFFF",
borderColor:"rgba(49, 49, 49, 1)",
  borderWidth:2,
borderRadius: 2,
},
  button: {
    marginHorizontal: 20,
    marginTop: 10,
    backgroundColor: "white",
    width: 258,
    height:45,
    display: "flex",
    flexDirection: "row",
    // justifyContent:"center",
    alignItems: "center",
    borderColor: "#313131",
    borderWidth: 1,
    padding: 5,
    borderRadius: 2,
  },
  buttonText: {
    textAlign: "center",
    fontFamily: "IBMPlexSans-Medium",
    fontWeight: "500",
    fontSize: 12,
  },
  account: {
    color: "#666",
      fontFamily: "IBMPlexSans-Light",
    letterSpacing: .6,
    fontSize: 12,
 
  },
  signUp: {
    fontFamily: "IBMPlexSans-Regular",
    fontSize: 12,
    letterSpacing: .6,
    color: "#6dc0fc",
  },

  forgetButton:{
    marginTop:20,
      alignItems:"center",
      justifyContent:"center",
    },
    forgetText:{
      // fontFamily: "IBMPlexSans-Medium",
      fontSize: 14,
      fontWeight:"500",
      textAlign: "center",
      lineHeight: 24,
      color: "#CCCC",
    }
});

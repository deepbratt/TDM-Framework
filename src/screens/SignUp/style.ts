import { StyleSheet, Dimensions } from "react-native";


export const signInStyles = StyleSheet.create({
  container: {
    height:100,
    backgroundColor: "white",
  },
  top: {
    justifyContent: "flex-start",
    marginTop: 56,
  },
  mid: {
    justifyContent: "center",
    marginTop: 0,
  },
  bottom: {
height:100,
    justifyContent: "flex-end",
    alignItems:"center",
  marginBottom:10,
  },
  img: {
    marginHorizontal: 30,
    marginVertical: 20,
    width: 300,
    aspectRatio:1*1.4,
    padding: 0,
  },
  imgDiv: {
    marginHorizontal: 30,
    marginVertical: 20,
    width: 300,
    aspectRatio:1*1.3,
    padding: 0,
  },
  head: {
    fontFamily: "IBMPlexSans-SemiBold",
    fontSize:18,
    fontWeight:"600",
    color: "rgba(49, 49, 49, 1)",
    lineHeight: 50,
    textAlign: "center",
  },
  detail: {
    fontFamily: "IBMPlexSans-Light",
    fontSize: 12,
    textAlign: "center",
    color: "rgba(102, 102, 102, 1)",
    letterSpacing: .5,
  
  },
  button: {
    marginHorizontal: 20,
    marginTop: 8,
    backgroundColor: "white",
    width: 280,
    display: "flex",
    flexDirection: "row",
    // justifyContent:"space-between",
    alignItems: "center",
    borderColor: "#313131",
    borderWidth: 1,
    padding: 5,
    borderRadius: 2,
  },
  buttonIcon: {
    marginHorizontal: 3,
  },
  buttonText: {
    textAlign: "center",
    // fontFamily: "IBMPlexSans-Medium",
    fontWeight: "500",
    fontSize: 12,
  },
  signUp: {
    fontFamily: "IBMPlexSans-Medium",
    fontWeight: "500",
    fontSize: 12,
    color: "#6dc0fc",
  },
  account: {
    color: "rgba(49, 49, 49, 1)",
    fontWeight: "500",
    letterSpacing: 1,
    fontSize: 12,
 
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
  forgetButton:{
  marginTop:20,
    alignItems:"center",
    justifyContent:"center",
  },
  forgetText:{
    fontFamily: "IBMPlexSans-Medium",
    fontSize: 14,
    textAlign: "center",
    lineHeight: 24,
    color: "#CCCC",
  }
});

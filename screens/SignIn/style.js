import { StyleSheet, Dimensions } from "react-native";
export const loginStyle = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "white",
   
  },
  top: {
    flex: 1,
    justifyContent: "flex-start",

    marginTop: 56,
  },
  mid: {
    flex: 2,
    justifyContent: "center",
    marginTop: 0,
  },
  bottom: {
    height:80,
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
  head: {
    fontFamily: "IBMPlexSans-Bold",
    color: "rgba(49, 49, 49, 1)",
    fontWeight: "500",
    fontSize: 16,
    lineHeight: 35,
    textAlign: "center",
  },
  detail: {
    fontFamily: "IBMPlexSans-Light",
    textAlign: "center",
    color: "rgba(102, 102, 102, 1)",
    letterSpacing: 1,
    fontSize: 12,
  },
  button: {
    marginHorizontal: 20,
    marginTop: 8,
    backgroundColor: "white",
    width: 258,
    height:40,
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
  underline: {
    borderBottomWidth: 1,
    color: "rgba(49, 49, 49, 1)",
    textDecorationLine:"underline",
    fontWeight: "500",
    letterSpacing: 1,
    fontSize: 12,
  },
  forgetButton:{
   
    marginTop:20,
      alignItems:"center",
      justifyContent:"center",
    },
    forgetText:{
      fontFamily: "IBMPlexSans-Medium",
      fontSize: 14,
      fontWeight:"500",
      textAlign: "center",
      lineHeight: 24,
      color: "#CCCC",
    }
});

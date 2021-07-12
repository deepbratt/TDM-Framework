import { StyleSheet, Dimensions } from "react-native";
export const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "white", 
  },
  top: {
    flex: 1,
    justifyContent: "flex-start",
    marginTop: 56,
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
  bottom: {
    height:55,
        justifyContent: "flex-end",
        alignItems:"center",
      marginBottom:10,
      },
 


  underline: {
    color:"#666666",
    borderBottomWidth: 1,
    textDecorationLine:"underline",
    fontWeight: "500",
      fontFamily: "IBMPlexSans-Medium",
    letterSpacing: 1,
    fontSize: 12,
  },
});
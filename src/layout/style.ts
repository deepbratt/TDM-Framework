import { StyleSheet, Dimensions } from "react-native";
import { widthPercentageToDP as wp, heightPercentageToDP as hp } from 'react-native-responsive-screen';
import { COLOR } from "../Theme/Colors";
export const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: COLOR.White, 
  },
  top: {
    flex: 1,
    justifyContent: "flex-start",
    marginTop: hp('9%'),
  },
  head: {
    fontFamily: "IBMPlexSans-SemiBold",
    fontSize:18,
    fontWeight:"600",
    color: COLOR.DarkCharcoal,
    lineHeight: 50,
    textAlign: "center",
  },
  detail: {
    fontFamily: "IBMPlexSans-Light",
    fontSize: 12,
    textAlign: "center",
    color: COLOR.GraniteGray,
    letterSpacing: .5,
  },
  bottom: {
    height:hp('9.5%'),
    justifyContent: "flex-end",
    alignItems:"center",
      marginBottom:hp('.5%'),
      },
  underline: {
    color:COLOR.GraniteGray,
    borderBottomWidth: 1,
    textDecorationLine:"underline",
    fontWeight: "500",
      fontFamily: "IBMPlexSans-Medium",
    letterSpacing: 1,
    fontSize: 12,
  },
});
import { StyleSheet, Dimensions } from "react-native";
import { color } from "react-native-reanimated";

export const loginStyle = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "white",
    justifyContent: "center",
    alignItems: "center",
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
    flex: 1,
    justifyContent: "flex-end",
    marginBottom: 26,
  },
  img: {
    marginHorizontal: 30,
    marginVertical: 5,
    width: 320,
    height:180,
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
});

import { StyleSheet } from "react-native";
import { COLOR } from "../../Theme/Colors";
export const styles = StyleSheet.create({
  root: {
    flex: 1,
   backgroundColor: COLOR.White
  },
  container: {
    flex: 1,

    justifyContent: "center",
    alignItems: "center",
  },
  image: { resizeMode: "contain", height: 80, width: "35%" },
  splashText: {
    fontFamily: "IBMPlexSans-Regular",
    fontWeight: "300",
    fontSize: 12,
    textAlign: "center",
    justifyContent: "center",
    alignItems: "center",
    color: COLOR.GraniteGray,
  },
});

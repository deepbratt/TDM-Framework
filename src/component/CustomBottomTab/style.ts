import { StyleSheet, Dimensions } from "react-native";
import { COLOR } from "../../Theme/Colors";
export const tabStyles = StyleSheet.create({
  
    plusButton: {
      // position: "absolute",
      alignSelf: "center",
      backgroundColor: COLOR.White,
      width: 70,
      height: 70,
      borderRadius: 35,
      bottom: 35,
      zIndex: 10,
    },
    button: {
      width: 60,
      height: 60,
      alignItems: "center",
      justifyContent: "center",
      shadowColor: "grey",
      shadowOpacity: 0.1,
      shadowOffset: { x: 2, y: 0 },
      shadowRadius: 2,
      borderRadius: 30,
      position: "absolute",
      bottom: 20,
      right: 0,
      top: 5,
      left: 5,
      shadowOpacity: 5.0,
    },
    mainContainer: {
      position: "absolute",
      borderTopLeftRadius: 3,
      borderTopRightRadius: 3,
      shadowOpacity: 0.3,
      shadowRadius: 3,
      shadowOffset: {
        height: 3,
        width: 3,
      },
      width: "100%",
      height: 70,
      flexDirection: "row",
      justifyContent: "space-between",
      paddingVertical: 10,
      paddingHorizontal: 25,
    },
    flex: {
      flexDirection: "column",
      alignItems: "center",
      justifyContent: "center",
    },
    textIcon: { justifyContent: "center", alignItems: "center", color: COLOR.White },
    actionBtn: {
      backgroundColor: COLOR.BlueDodge,
      textShadowOffset: { width: 5, height: 5 },
      textShadowRadius: 10,
      borderWidth: 2,
      borderColor: COLOR.White,
    },
  });
  
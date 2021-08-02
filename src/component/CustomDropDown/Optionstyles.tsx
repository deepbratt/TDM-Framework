import { StyleSheet } from "react-native";
import { COLOR } from "../../Theme/Colors";
export const optStyles = StyleSheet.create({
  container: {
    justifyContent: "center",
    alignItems: "center",
  },
  modalView: {
    margin: 20,
    backgroundColor: COLOR.White,
    borderRadius: 20,
    padding: 35,
    alignItems: "center",
    shadowColor: COLOR.Black,
    shadowOffset: {
      width: 0,
      height: 2
    },
    shadowOpacity: 0.25,
    shadowRadius: 4,
    elevation: 5
  },
  modal: {
    margin: 45,
    padding: 1,
    borderRadius: 6,
    backgroundColor: COLOR.White,
    shadowColor: COLOR.Black,
    shadowOffset: {
      width: 0,
      height: 2
    },
    shadowOpacity: 0.25,
    shadowRadius: 2,
    elevation: 1,
  },
  option: {
    alignItems: "flex-start",
    borderBottomColor: COLOR.Black,
    borderBottomWidth: .4,
  },
  text: {
    margin: 20,
  },

});
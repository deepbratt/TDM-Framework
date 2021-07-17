import { StyleSheet } from "react-native";
export const optStyles = StyleSheet.create({
  container: {
    justifyContent: "center",
    alignItems: "center",
  },
  modalView: {
    margin: 20,
    backgroundColor: "white",
    borderRadius: 20,
    padding: 35,
    alignItems: "center",
    shadowColor: "#000",
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
    borderRadius: 20,
    backgroundColor: "white",
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 2
    },
    shadowOpacity: 0.25,
    shadowRadius: 2,
    elevation: 1,
    borderRadius: 2,
  },
  option: {
    alignItems: "flex-start",
    borderBottomColor: "#000",
    borderBottomWidth: .4,
  },
  text: {
    margin: 20,
  },

});
import {  Dimensions, StyleSheet} from "react-native";
export const styles = StyleSheet.create({

    container: {
          width: "100%",
      paddingHorizontal:10,
      flexDirection:"row",
      alignItems:"center",
      justifyContent:"space-between",
      height:  Dimensions.get('window').height - Dimensions.get('window').height / 1.14,
      shadowColor: "#000",
      shadowOffset: {
        width: 0,
        height: 2
      },
      shadowOpacity: 0.25,
      shadowRadius: 3,
      elevation: 3
    },
    item:{
      alignItems:"flex-start",
      justifyContent:"center",
  top:15,
      width: 80,
      height: 80,
    },
    item2:{
    alignItems:"center",
      justifyContent:"center",
      top:15,
      width: 80,
      height: 80,
    },
    item3:{
    alignItems:"flex-end",
      justifyContent:"center",
      top:15,
      width: 80,
      height: 80,
    },
    Text: {
      textAlign: "center",
      fontSize: 18,
      color: "rgba(49, 49, 49, 1)",
      fontWeight: "600",
      justifyContent: "center",
      alignItems: "center",
    },
  }); 
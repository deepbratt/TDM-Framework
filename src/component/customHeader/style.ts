import {  Dimensions, StyleSheet} from "react-native";
import { COLOR } from "../../Theme/Colors";
export const styles = StyleSheet.create({

    container: {
    
          width: "100%",
      paddingHorizontal:10,
      flexDirection:"row",
      alignItems:"center",
      justifyContent:"space-between",
      height:  Dimensions.get('window').height - Dimensions.get('window').height / 1.14,
      shadowColor: COLOR.Black,
    shadowOffset: { width: 0, height: 1 },
    shadowOpacity: 0.8,
    shadowRadius: 2,  
    elevation: 5
    },
    item:{
      alignItems:"flex-start",
      justifyContent:"center",
      top:15,
      left:15,
      width: 80,
      height: 60,
    },
    item2:{
    alignItems:"center",
      justifyContent:"center",
      top:15,
      // width: 80,
      height: 60,
    },
    item3:{
    alignItems:"flex-end",
      justifyContent:"center",
      top:15,
      right:15,
      width: 80,
      height: 60,
    },
  text: {
    width: 200,
    fontFamily: "IBMPlexSans-Bold",
    fontSize:18,
      textAlign: "center",
     lineHeight:25,
      color: COLOR.DarkCharcoal,
      fontWeight: "600",
      justifyContent: "center",
      alignItems: "center",
    },
  }); 
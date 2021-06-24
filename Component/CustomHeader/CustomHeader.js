import * as React from "react";
import { Appbar } from "react-native-paper";
import { StyleSheet,View,Text,Image,TouchableOpacity ,Dimensions} from "react-native";
import DropDown from "../CustomDropDown/CustomDropDown";

const CustomHeader = ({ title, onPress,location, isHome,headerStyle }) => {
  const _handleMore = () => console.log("Shown more");
  const HEIGHT = Dimensions.get("window").height;
  const WIDTH = Dimensions.get("window").width;
  
  return (
 
    <View style={[styles.container,headerStyle]}>
      <TouchableOpacity  onPress={onPress} style={styles.item}>
      <Image style={{width:25,height:19}} source={
          isHome
            ? require("../../assets/sideBar/menu.png")
            : require("../../assets/sideBar/profiles.png")
        }
       />
        </TouchableOpacity>
   {   title &&
    <View  onPress={_handleMore} style={styles.item2}>
          <Text style={styles.Text}>
           {title} 
          </Text>
        </View>
   }
   {location && 
   <DropDown/>
   }
 
       <View  onPress={_handleMore} style={styles.item3}>
      <Image style={{width:25,height:25}} source={require("../../assets/sideBar/profiles.png")}
       />
        </View>
    </View>
 
  );
};
export default CustomHeader;
const styles = StyleSheet.create({

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

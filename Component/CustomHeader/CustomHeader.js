import * as React from "react";
import { Appbar } from "react-native-paper";
import { StyleSheet,View } from "react-native";
import DropDown from "../CustomDropDown/CustomDropDown";

const CustomHeader = ({ title, onPress,location, isHome,headerStyle }) => {
  const _handleMore = () => console.log("Shown more");

  return (
 
    <Appbar.Header style={[styles.container,headerStyle]}>
      <Appbar.Action
        icon={
          isHome
            ? require("../../assets/sideBar/menu.png")
            : require("../../assets/sideBar/profiles.png")
        }
        onPress={onPress}
      />
   {   title &&
      <Appbar.Content style={styles.Text} title={title} />
   }
   {location && 
   <DropDown/>
   }
      <Appbar.Action
        icon={require("../../assets/sideBar/profiles.png")}
        onPress={_handleMore}
      />
    </Appbar.Header>
 
  );
};
export default CustomHeader;
const styles = StyleSheet.create({

  container: {
    width: "100%",
    justifyContent:"flex-start",
    height: 70,
   
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

import React from "react";
import {
  View,

  StyleSheet,

} from "react-native";
import CustomHeader from "../CustomHeader/CustomHeader";
import { ScrollView } from "react-native-gesture-handler";
import { CustomBottomTab } from "../CustomBottomTab";


export default function AfterLogin({ children,navigation }) {
  return (
    <View style={styles.container}>
      <CustomHeader
        isHome={true}
       title="Home"
       onPress={()=>navigation.openDrawer()}
        headerStyle={{ backgroundColor: "#F8F8F8" }}
      />
      <ScrollView>{children}</ScrollView>
<CustomBottomTab/>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: "column",
   backgroundColor:"white"
  },
 
});

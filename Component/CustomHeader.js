import * as React from "react";
import { Appbar } from "react-native-paper";
import { StyleSheet } from "react-native";

const CustomHeader = ({ title, onPress, isHome }) => {
  const _handleMore = () => console.log("Shown more");

  return (
    <Appbar.Header style={styles.container}>
      <Appbar.Action
        icon={
          isHome
            ? require("../assets/sideBar/menu.png")
            : require("../assets/sideBar/profiles.png")
        }
        onPress={onPress}
      />
      <Appbar.Content style={styles.Text} title={title} />
      <Appbar.Action
        icon={require("../assets/sideBar/profiles.png")}
        onPress={_handleMore}
      />
    </Appbar.Header>
  
  );
};
export default CustomHeader;
const styles = StyleSheet.create({
  container: {
    width: "100%",
    height: 70,
    backgroundColor: "rgba(248, 248, 248, 1)",
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

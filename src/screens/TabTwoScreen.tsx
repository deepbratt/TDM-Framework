import * as React from 'react';
import { Button, StyleSheet } from 'react-native';
import { useDispatch } from 'react-redux';
import { Text, View } from 'react-native';
import { logout } from "../redux/reducers/authSlice";
import { useHistory } from "react-router-native";
import CustomHeader from '../component/customHeader/CustomHeader';
import { openDrawer } from '../navigation';
export default function TabTwoScreen() {
  let history = useHistory();
  const dispatch = useDispatch();
  const handle = () => {
    dispatch(logout());
    history.push("/SignIn");

  }
  return (
    <View>
      <CustomHeader
        headerStyle={{ backgroundColor: "#C20000" }}
        color="#fff" isHome={true} location={true}
        onPress={() => openDrawer()} />
      <View style={styles.container}>
        <Text style={styles.title}>Screen Two</Text>
        <Button onPress={handle} title='Logout' />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  title: {
    fontSize: 20,
    fontWeight: 'bold',
  },

});

import * as React from 'react';
import { Button, StyleSheet } from 'react-native';
import { useDispatch } from 'react-redux';
import { Text, View } from 'react-native';
import { logout } from "../redux/reducers/authSlice";
import { useHistory } from "react-router-native";
export default function TabTwoScreen() {
  let history = useHistory();
  const dispatch = useDispatch();
  const handle = () => {
    dispatch(logout());
    history.push("/SignIn");

  }
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Screen Two</Text>
      <Button onPress={handle} title='Logout' />
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

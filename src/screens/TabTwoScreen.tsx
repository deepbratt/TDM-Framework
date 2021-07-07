import * as React from 'react';
import { Button, StyleSheet } from 'react-native';
import { useDispatch } from 'react-redux';
import { Text, View } from 'react-native';
import {  logout } from "../redux/reducers/authSlice";

export default function TabTwoScreen() {
  const dispatch = useDispatch();
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Screen Two</Text>
    
      <Button onPress={() => dispatch(logout())} title='Logout'/>

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

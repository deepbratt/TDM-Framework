import React, { useState, FC, useCallback, useRef } from "react";

import { Button, StyleSheet ,Image} from 'react-native';
import { useDispatch } from 'react-redux';
import { Text, View,TouchableOpacity } from 'react-native';
import { logout } from "../redux/reducers/authSlice";
import { useHistory } from "react-router-native";
import CustomHeader from '../component/customHeader/CustomHeader';
import { openDrawer } from '../navigation';
import { COLOR } from "../Theme/Colors";

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
        headerStyle={{ backgroundColor: COLOR.primary }}
        color={COLOR.White} isHome={true} location={true}
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
    color:COLOR.primary
  },

});
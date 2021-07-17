import React, { useState, FC, useCallback, useRef } from "react";

import { Button, StyleSheet ,Image} from 'react-native';
import { useDispatch } from 'react-redux';
import { Text, View,TouchableOpacity } from 'react-native';
import { logout } from "../redux/reducers/authSlice";
import { useHistory } from "react-router-native";
import CustomHeader from '../component/customHeader/CustomHeader';
import { openDrawer } from '../navigation';
import CustomCarousel from '../component/CustomTabs/carousel';
import { Items } from "../utils/constants/HomeConstant";
import CustomButton from "../component/CustomButton";

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
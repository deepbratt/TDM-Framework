import React, { useState, FC, useCallback, useRef } from "react";

import { Button, StyleSheet ,Image} from 'react-native';
import { useDispatch } from 'react-redux';
import { Text, View,TouchableOpacity } from 'react-native';
import { logout } from "../redux/reducers/authSlice";
import { useHistory } from "react-router-native";
import CustomHeader from '../component/customHeader/CustomHeader';
import { openDrawer } from '../navigation';
import { COLOR } from "../Theme/Colors";
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
        headerStyle={{ backgroundColor: COLOR.primary }}
        color={COLOR.White} isHome={true} location={true}
        onPress={() => openDrawer()} />
      <View style={styles.container}>
        <Text style={styles.title}>Screen Two</Text>
        <Button onPress={handle} title='Logout' />
        <CustomButton linkTo="/notify" text="notification" buttonStyle={{marginVertical:10,width:100,height:30,backgroundColor:"red"}} textStyle={{color:"white"}}/>
        <CustomButton linkTo="/token-amount" text="token" buttonStyle={{marginVertical:10,width:100,height:30,backgroundColor:"red"}}  textStyle={{color:"white"}}/>
        <CustomButton linkTo="/car-Details/:id" text="car Detail" buttonStyle={{marginVertical:10,width:100,height:30,backgroundColor:"red"}} textStyle={{color:"white"}}/>
        <CustomButton linkTo="/add-Details" text="ADD Detail" buttonStyle={{marginVertical:10,width:100,height:30,backgroundColor:"red"}} textStyle={{color:"white"}}/>
        <CustomButton linkTo="/post-details" text="Post Details" buttonStyle={{marginVertical:10,width:100,height:30,backgroundColor:"red"}} textStyle={{color:"white"}}/>
        <CustomButton linkTo="/request-accept" text="request Accept" buttonStyle={{marginVertical:10,width:100,height:30,backgroundColor:"red"}} textStyle={{color:"white"}}/>
        <CustomButton linkTo="/pay-token" text="payMENT token" buttonStyle={{marginVertical:10,width:100,height:30,backgroundColor:"red"}} textStyle={{color:"white"}}/>
        <CustomButton linkTo="/payment-error" text="payment error" buttonStyle={{ marginVertical: 10, width: 100, height: 30, backgroundColor: "red" }} textStyle={{ color: "white" }} />
        <CustomButton linkTo="/confirm-payment" text="confirm payment" buttonStyle={{ marginVertical: 10, width: 100, height: 30, backgroundColor: "red" }} textStyle={{ color: "white" }} />
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
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




interface RenderItemProps {
  item: [];
  index: number;
}
export default function TabTwoScreen() {
  let history = useHistory();
  const dispatch = useDispatch();
  const handle = () => {
    dispatch(logout());
    history.push("/SignIn");

  }
  const [tab, setTab] = useState({
    tab1: false,
    tab2: true
});

const handleTab = (swap) =>{
   if(swap==="tab1"){
        setTab({
           tab1: true,
           tab2: false
        })
   }
   else{
    setTab({
        tab1: false,
        tab2: true
 })
   }
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
        <View style={styles.tabGroup}>
      <TouchableOpacity
          activeOpacity={0.6}
          underlayColor="#0000ff"
          onPress={()=> handleTab("tab1")}
          style={[styles.tabButton, tab.tab1 && styles.tabButtonActive]}

      >
         <Text style={[styles.tabButtonTitle, tab.tab1 && styles.tabButtonTitleActive]}>Tab btn1</Text>
      </TouchableOpacity>

      <TouchableOpacity
         activeOpacity={0.6}
         underlayColor="#0000ff"
         onPress={()=> handleTab("tab2")}
         tyle={[styles.tabButton, tab.tab2 && styles.tabButtonActive]}
      >
         <Text style={[styles.tabButtonTitle, tab.tab2 && styles.tabButtonTitleActive]}>Tab btn2</Text>
      </TouchableOpacity>
     
  </View>
  {/* {
       tab.tab1?(<TabTwoScreen/>):(<TabOneScreen/>)
    } */}
     <CustomButton linkTo="/top" text="hell"/>
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

  
tabGroup:{
    flexDirection: 'row',
    justifyContent: 'center',
    backgroundColor: 'rgba(11, 93, 30, 0.11)',
    borderRadius: 46,
    marginHorizontal: 20,
    justifyContent: 'center'
  },
  tabButton:{
      backgroundColor: 'transparent',
      borderRadius: 46,
      paddingHorizontal: 20,
      paddingVertical: 12,
      alignItems: 'center',
  },
  tabButtonActive:{
      backgroundColor: '#0B5D1E',
      borderRadius: 46,
      paddingHorizontal: 20,
      paddingVertical: 12,
      alignItems: 'center',
  },
  tabButtonTitle:{
      fontSize: 16,
      fontWeight: 'normal',
      textAlign: 'center',
      color: '#000'
  },
  tabButtonTitleActive:{
      fontSize: 16,
      fontWeight: 'normal',
      textAlign: 'center',
      color: '#fff'
  }

});

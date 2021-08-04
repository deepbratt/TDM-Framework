
import {StyleSheet} from 'react-native';
import { widthPercentageToDP as wp, heightPercentageToDP as hp } from 'react-native-responsive-screen';

export const addStyles = StyleSheet.create({
  loadingView:{
      flex:1,
      justifyContent:"center",
      alignItems:"center",
      marginTop:hp('3%')}
  });
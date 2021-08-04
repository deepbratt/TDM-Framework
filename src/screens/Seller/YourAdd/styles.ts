
import {StyleSheet} from 'react-native';
import { widthPercentageToDP as wp, heightPercentageToDP as hp } from 'react-native-responsive-screen';
import { COLOR } from '../../Theme/Colors';
export const addStyles = StyleSheet.create({
  loadinView:{
      flex:1,
      justifyContent:"center",
      alignItems:"center",
      marginTop:hp('3%')}
  });
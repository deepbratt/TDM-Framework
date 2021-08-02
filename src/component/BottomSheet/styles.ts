import { StyleSheet } from "react-native";
import { widthPercentageToDP as wp, heightPercentageToDP as hp } from 'react-native-responsive-screen';
import { COLOR } from "../../Theme/Colors";

export const styles = StyleSheet.create({
  container: {
    flex:1,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor:'red'
  },
  bottomNavigationView: {
    backgroundColor: COLOR.White,
    width: wp('100%'),
    height: 263,
    borderTopLeftRadius: 24,
    borderTopRightRadius:24,
    justifyContent: 'flex-start',
    alignItems: 'center',
  },
  background: {
    flex:1
  },
});
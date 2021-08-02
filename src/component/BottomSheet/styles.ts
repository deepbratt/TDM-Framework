import { StyleSheet } from "react-native";
import { widthPercentageToDP as wp, heightPercentageToDP as hp } from 'react-native-responsive-screen';

export const styles = StyleSheet.create({
  container: {
    flex:1,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor:'red'
  },
  bottomNavigationView: {
    backgroundColor: '#fff',
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
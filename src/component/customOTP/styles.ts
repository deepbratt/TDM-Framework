import { StyleSheet } from "react-native";
import { widthPercentageToDP as wp, heightPercentageToDP as hp } from 'react-native-responsive-screen';
import { COLOR } from "../../Theme/Colors";
export const styles = StyleSheet.create({
  root: {
    width: wp("100%"),
    height:hp('30%'),
    backgroundColor: COLOR.White,
    borderTopLeftRadius: 24,
    borderTopRightRadius:24,
  },
  codeFiledRoot: {
    marginTop: hp('3%'),
    width: wp('80%'),
    marginLeft: 'auto',
    marginRight: 'auto',
  },
  cellRoot: {
    width: wp('15%'),
    height: hp('5%'),
    justifyContent: 'center',
    alignItems: 'center',
    borderBottomColor: '#475E69',
    borderBottomWidth: 2,
  },
  cellText: {
    color: COLOR.DarkCharcoal,
    fontSize: 24,
    textAlign: 'center',
    fontFamily: 'IBMPlexSans-Medium',
  },
  focusCell: {
    borderBottomColor: '#007AFF',
    borderBottomWidth: 2,
  },
  textStyle: {
    width:wp('80%'),
    fontSize: 16,
    fontFamily: 'IBMPlexSans-Light',
    color: '#96A7AF',
    paddingTop: hp('3%'),
    alignSelf: 'center',
  },
  gradientStyle: {
    width: wp('80%'),
    paddingVertical:hp('1.5%'),
    borderRadius: 6,
    flexDirection: 'row',
    justifyContent: 'center',
    marginTop: hp('2%'),
    alignSelf:'center'
  },
  gradientTextStyle: {
    fontSize: 16,
    fontFamily: 'IBMPlexSans-Medium',
    textAlign: 'center',
    alignSelf: 'center',
    color: COLOR.White
  },
  gradientImageStyle: {
    height: 9,
    width: 16,
    tintColor: COLOR.White,
    alignSelf: 'center',
    marginLeft: wp('2%'),
  }
})
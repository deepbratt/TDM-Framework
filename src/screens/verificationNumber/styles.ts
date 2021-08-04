import { StyleSheet, } from "react-native";
import { widthPercentageToDP as wp, heightPercentageToDP as hp } from 'react-native-responsive-screen';
import { COLOR } from "../../Theme/Colors";
export const styles = StyleSheet.create({
  heading: {
    width: wp('95%'),
    alignSelf: 'center',
    fontSize: 18,
    fontFamily:'IBMPlexSans-SemiBold',
    textAlign: 'center',
    color: COLOR.DarkCharcoal,
    marginTop: hp('10%')
  },
  subHeading: {
    width: wp('95%'),
    alignSelf: 'center',
    fontSize: 12,
    fontFamily: 'IBMPlexSans-Light',
    textAlign: 'center',
    color: COLOR.GraniteGray,
    marginTop: hp('5%')
  },
  inputFieldView: {
    alignItems: "center",
    justifyContent: "center",
    marginTop: hp('5%')
  },
  gradientButtonStyle: {
    width: wp('72%'),
    borderRadius: 6,
    marginTop: hp('2%'),
    flexDirection: 'row',
    justifyContent: 'center',
    alignSelf: 'center',
    paddingTop: hp('1.5%'),
    paddingBottom: hp('1.5%')
  },
  gradientButtonText: {
    fontSize: 16,
    fontFamily: 'IBMPlexSans-Medium',
    textAlign: 'center',
    alignSelf: 'center',
    color: COLOR.White
  },
  img: {
    marginHorizontal: wp('10%'),
    marginVertical: hp('4%'),
    width: wp('81%'),
    aspectRatio:1*1.4,
    padding: 0,
  },
});

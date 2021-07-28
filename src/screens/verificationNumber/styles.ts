import { StyleSheet, } from "react-native";
import { widthPercentageToDP as wp, heightPercentageToDP as hp } from 'react-native-responsive-screen';
export const styles = StyleSheet.create({
  heading: {
    width: wp('95%'),
    alignSelf: 'center',
    fontSize: 18,
    fontFamily:'IBMPlexSans-SemiBold',
    textAlign: 'center',
    color: '#313131',
    marginTop: hp('10%')
  },
  subHeading: {
    width: wp('95%'),
    alignSelf: 'center',
    fontSize: 12,
    fontFamily: 'IBMPlexSans-Light',
    textAlign: 'center',
    color: '#666666',
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
    color: '#FFFFFF'
  },
  img: {
    marginHorizontal: wp('10%'),
    marginVertical: hp('4%'),
    width: wp('81%'),
    aspectRatio:1*1.4,
    padding: 0,
  },
  activeField: {
    marginVertical: 10,
    width: wp('71%'),
    height: hp('6%'),
    backgroundColor: "#FFFFFF",
    borderColor: "#C20000",
    borderWidth: 2,
    borderRadius: 2,
  },
  inputField: {
    marginVertical: 10,
    width: wp('71%'),
    height: hp('6%'),
    backgroundColor: "#FFFFFF",
    borderColor: "rgba(49, 49, 49, 1)",
    borderWidth: 2,
    borderRadius: 2,
  },
});

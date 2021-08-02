import { StyleSheet, Dimensions } from "react-native";
import { widthPercentageToDP as wp, heightPercentageToDP as hp } from 'react-native-responsive-screen';
import { COLOR } from "../../Theme/Colors";
export const loginStyle = StyleSheet.create({
  heading: {
    width: wp('95%'),
    alignSelf: 'center',
    fontSize: 18,
    fontWeight: '600',
    textAlign: 'center',
    color: '#313131',
    marginTop: hp('5%')
  },
  mid: {
    flex: 2,
    justifyContent: "center",
    marginTop: 0,
  },
  img: {
    marginHorizontal: wp('10%'),
    marginVertical: hp('4%'),
    width: wp('81%'),
    aspectRatio:1*1.4,
    padding: 0,
  },
  button: {
    marginHorizontal: wp('5%'),
    marginTop:  hp('1%'),
    backgroundColor: COLOR.White,
    width: wp('76%'),
    height:hp('6.5%'),
    display: "flex",
    flexDirection: "row",
    // justifyContent:"center",
    alignItems: "center",
    borderColor: COLOR.DarkCharcoal,
    borderWidth: 1,
    padding: 5,
    borderRadius: 2,
  },
  buttonText: {
    textAlign: "center",
    fontFamily: "IBMPlexSans-Medium",
    fontWeight: "500",
    fontSize: 12,
  },
  accountButton:{ 
    textAlign: "right",
    marginHorizontal: wp('5%'),
    width: wp('76%'),
    marginVertical: 2
 },
  account: {
    color: COLOR.GraniteGray,
    fontFamily: "IBMPlexSans-Light",
    letterSpacing: .6,
    fontSize: 12,

  },
  signUp: {
    fontFamily: "IBMPlexSans-Regular",
    fontSize: 12,
    letterSpacing: .6,
    color: COLOR.SIGNBlue,
  },

  forgetButton:{
    marginTop:hp('3%'),
      alignItems:"center",
      justifyContent:"center",
    },
    forgetText:{
      // fontFamily: "IBMPlexSans-Medium",
      fontSize: 14,
      fontWeight:"500",
      textAlign: "center",
      lineHeight: 24,
      color: COLOR.ChineseSilver,
    },
    SubmitView:{
      alignItems: "center",
      justifyContent: "center",
      marginVertical: 20,
  }, 
    alignCenter:{ 
      alignItems: "center",
      justifyContent: "center" 
  },
  imgDiv: {
    marginHorizontal: wp('10%'),
    marginVertical: hp('4%'),
    width: wp('81%'),
    aspectRatio:1*1.3,
    padding: 0,
  },
});

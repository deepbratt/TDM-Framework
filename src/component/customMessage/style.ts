import {  Dimensions, StyleSheet} from "react-native";
import { COLOR } from "../../Theme/Colors";
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from "react-native-responsive-screen";
export const styles = StyleSheet.create({
    container: {
        width: wp('90%'),
        backgroundColor: COLOR.WhiteOlive,
        alignSelf: 'center',
        flexDirection: 'column',
        justifyContent: 'flex-start'
    },
    iconStyle: {
        marginTop: hp('1%'),
        marginLeft: wp('2.5%'),
        alignSelf: 'flex-start',
    },
    tokenAmountView: {
        alignSelf: 'center',
        flexDirection: 'column',
        justifyContent: 'flex-start'
    },
    img: {
        width: wp('70%'),
        alignSelf: 'center',
        height: hp('20%'),
        marginTop: hp('3%'),
        borderRadius: 14,
        resizeMode:"cover",
    },
    img1: {
        width: wp('70%'),
        alignSelf: 'center',
        height: hp('20%'),
        marginTop: hp('2%'),
        resizeMode:"contain"
    },
    brandName: {
        width: wp('80%'),
        alignSelf: 'center',
        fontSize: 14,
        fontFamily:'IBMPlexSans-Bold',
        textAlign: 'center',
        marginTop: hp('1%'),
        color: COLOR.RaisinBlack
    },
    thumbIcon: {
        alignSelf: 'center',
        marginVertical: hp('2%'),
    },
    detailView: {
        width: wp('80%'),
        alignSelf: 'center',
        marginTop: hp('1%'),
        justifyContent: 'center',
        flexDirection: 'row'
    },
    amountText: {
        marginLeft:wp('2%'),
        fontSize: 14,
        fontFamily: 'IBMPlexSans-Medium',
        color: COLOR.primary,
    },
    locationText: {
        fontSize: 12,
        fontFamily: 'IBMPlexSans-Medium',
        color: COLOR.secondary,
        paddingTop: hp('0.5%'),
        marginRight:wp('2.5%')
    },
    paymentSuccessText: {
        width: wp('80%'),
        alignSelf: 'center',
        fontSize: 18,
        fontFamily: 'IBMPlexSans-Bold',
        textAlign: 'center',
        marginTop: hp('2%'),
        color: COLOR.TuftsBlue
    },
    paymentSuccessDetails: {
        width: wp('70%'),
        fontSize: 12,
        fontFamily: 'IBMPlexSans-Light',
        alignSelf: 'center',
        textAlign: 'center',
        color: COLOR.BlackOlive,
        marginTop: hp('2%')
    },
    paymentErrorText: {
        width: wp('80%'),
        alignSelf: 'center',
        fontSize: 18,
        fontFamily: 'IBMPlexSans-Bold',
        textAlign: 'center',
        marginTop: hp('5%'),
        color: COLOR.RedOlive
    },
    headingText: {
        width: wp('80%'),
        alignSelf: 'center',
        marginTop: hp('3.2%'),
        fontSize: 14,
        fontFamily: 'IBMPlexSans-Bold',
        color:COLOR.RaisinBlack,
        textAlign:'center',
    },
    infoBox: {
        width: wp('80%'),
        alignSelf: 'center',
        flexDirection: 'column',
        justifyContent: 'center',
        position: 'absolute',
        top:hp('14%')
    },
    tokenlocationText: {
        fontSize: 12,
        fontFamily: 'IBMPlexSans-Medium',
        color: COLOR.White,
        paddingTop: hp('0.5%'),
        marginRight: wp('2.5%'),
        marginLeft:wp('2%')
    },
    tokenamountText: {
        fontSize: 14,
        fontFamily: 'IBMPlexSans-Medium',
        color: COLOR.White,
        marginLeft:wp('2%')
    },
    gradientStyle: {
        width:wp('80%'),
        borderRadius: 6,
        marginTop:hp('5%'),
        flexDirection: 'row',
        justifyContent: 'center',
        alignSelf: 'center',
        paddingTop: hp('1.5%'),
        paddingBottom: hp('1.5%'),
        marginBottom:hp('1%')
    },
    gradientStyle1: {
        width:wp('80%'),
        borderRadius: 6,
        marginTop:hp('1%'),
        flexDirection: 'row',
        justifyContent: 'center',
        alignSelf: 'center',
        paddingTop: hp('1.5%'),
        paddingBottom: hp('1.5%'),
        marginBottom:hp('2%')
    },
    gradientTextStyle: {
        fontSize: 16,
        fontFamily: 'IBMPlexSans-Medium',
        textAlign: 'center',
        alignSelf: 'center',
        color: COLOR.White
    },
  }); 
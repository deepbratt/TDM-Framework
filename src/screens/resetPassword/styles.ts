import { StyleSheet } from "react-native";
import { widthPercentageToDP as wp, heightPercentageToDP as hp } from 'react-native-responsive-screen';
import { COLOR } from "../../Theme/Colors";
export const styles = StyleSheet.create({
    mainContainer: {
        flex:1,
        backgroundColor:  COLOR.background,
        justifyContent: 'flex-start',
    },
    img: {
        height: hp('5%'),
        width: wp('10%'),
        marginTop: hp('5%'),
        marginLeft: hp('5%'),
        alignSelf: 'flex-start',
        resizeMode: 'contain',
    },
    textContainer: {
        width: wp('65%'),
        alignSelf: 'center',
        marginTop: hp('5%'),
    },
    text: {
        fontSize: 18,
        fontFamily: 'IBMPlexSans-SemiBold',
        textAlign: "center",
        color: COLOR.DarkCharcoal
    },
    textContainer1: {
        width: wp('65%'),
        alignSelf: 'center',
        marginTop: hp('2%'),
    },
    text1: {
        fontSize: 14,
        fontFamily: 'IBMPlexSans-Light',
        textAlign: "center",
        color: COLOR.GraniteGray
    },
    buttonContainerStyle: {
        width: wp('80%'),
        marginTop: hp('3%'),
        backgroundColor: COLOR.White,
        borderColor: COLOR.BlueCrayola,
        alignSelf: 'center',
        borderWidth: 1,
        borderRadius: 11,
        shadowColor: COLOR.ChineseSilver,
        shadowRadius: 14,
        shadowOffset: {
            width: 0,
            height: 1,
        },
        shadowOpacity: 0.25,
        elevation: 5
    },
    buttonContainerStyle1: {
        width: wp('80%'),
        marginTop: hp('3%'),
        backgroundColor: COLOR.White,
        borderColor:COLOR.White,
        alignSelf: 'center',
        borderWidth: 1,
        borderRadius: 11,
        shadowColor: COLOR.ChineseSilver,
        shadowRadius: 14,
        shadowOffset: {
            width: 0,
            height: 1,
        },
        shadowOpacity: 0.25,
        elevation: 5
    },
    imageStyle: {
        height: hp('5%'),
        width: wp('10%'),
        alignSelf: 'center',
        marginTop: hp('2%'),
        tintColor: COLOR.BlueCrayola,
        resizeMode: 'cover'
    },
    imageStyle1: {
        height: hp('5%'),
        width: wp('10%'),
        alignSelf: 'center',
        marginTop: hp('2%'),
        tintColor: COLOR.primary,
        resizeMode: 'cover'
    },
    textStyleOne: {
        fontFamily: 'IBMPlexSans-SemiBold',
        fontSize: 18,
        textAlign: 'center',
        color: COLOR.DarkCharcoal,
        paddingTop: hp('2%')
    },
    textStyleTwo: {
        fontSize: 14,
        fontFamily: 'IBMPlexSans-Light',
        paddingTop: hp('2%'),
        paddingBottom:hp('2%'),
        textAlign: 'center',
        color: COLOR.DarkCharcoal
    },
    textStyleThree: {
        fontSize: 14,
        fontFamily: 'IBMPlexSans-Light',
        paddingTop: hp('1.7%'),
        paddingBottom:hp('2%'),
        paddingLeft:wp('1%'),
        textAlign: 'center',
        color: COLOR.GraniteGray
    },
})
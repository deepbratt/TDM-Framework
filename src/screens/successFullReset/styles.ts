import { StyleSheet } from "react-native"
import {widthPercentageToDP as wp, heightPercentageToDP as hp} from 'react-native-responsive-screen';
import { COLOR } from "../../Theme/Colors";
export const styles = StyleSheet.create({
    mainContainer: {
        flex:1,
        backgroundColor:  COLOR.background,
        justifyContent: 'flex-start'
    },
    img: {
        height: hp('5%'),
        width:wp('10%'),
        marginTop: hp('5%'),
        marginLeft:wp('5%'),
        alignSelf: 'flex-start',
        resizeMode: 'contain',
    },
    text: {
        fontSize: 18,
        fontFamily: 'IBMPlexSans-SemiBold',
        textAlign: "center",
        color: COLOR.DarkCharcoal,
        marginTop:hp('30%'),
    },
    text1: {
        width: wp('80%'),
        alignSelf: 'center',
        fontSize: 14,
        fontFamily: 'IBMPlexSans-Light',
        textAlign: "center",
        color: COLOR.GraniteGray,
        marginTop:hp('2%'),
    },
    gradientStyle: {
        width: wp('90%'),
        paddingVertical:hp('1.5%'),
        borderRadius: 6,
        marginTop:hp('40%'),
        flexDirection: 'row',
        justifyContent: 'center',
        alignSelf:'center'
    },
    gradientTextStyle: {
        fontSize: 16,
        fontFamily:'IBMPlexSans-Medium',
        textAlign: 'center',
        alignSelf: 'center',
        color: COLOR.White,  
      },
    gradientImageStyle: {
        height: 9,
        width: 16,
        tintColor: COLOR.White,
        alignSelf: 'center',
        marginLeft: 10
    }
})
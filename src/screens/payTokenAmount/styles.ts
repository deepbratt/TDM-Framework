import { StyleSheet } from "react-native";
import { widthPercentageToDP as wp, heightPercentageToDP as hp } from 'react-native-responsive-screen';
export const styles = StyleSheet.create({
    mainContainer: {
        width: wp('90%'),
        height: hp('55%'),
        backgroundColor: '#F3F4F9',
        alignSelf: 'center',
        flexDirection: 'column',
        justifyContent: 'flex-start'
    },
    icon: {
        height: 48,
        width: 48,
        marginTop: hp('1%'),
        marginLeft: wp('1%'),
        alignSelf: 'flex-start',
        resizeMode: 'contain',
    },
    headingText: {
        width: wp('80%'),
        alignSelf: 'center',
        marginTop: hp('3.2%'),
        fontSize: 14,
        fontFamily: 'IBMPlexSans-Bold',
        color: '#212121',
        textAlign:'center',
    },
    image: {
        width: wp('70%'),
        alignSelf: 'center',
        height: hp('20%'),
        marginTop: hp('2%'),
        resizeMode:"contain"
    },
    detailBox: {
        width: wp('80%'),
        alignSelf: 'center',
        flexDirection: 'column',
        justifyContent: 'center',
        position: 'absolute',
        top:hp('21%')
    },
    buttonIcon: {
        height: hp('3%'),
        width: wp('5%'),
        resizeMode:'contain',
        marginRight:wp('2%'),
        alignSelf: 'center',
        tintColor:'#FFFFFF',
    },
    detailView: {
        width: wp('80%'),
        alignSelf: 'center',
        marginTop: hp('1%'),
        justifyContent: 'center',
        flexDirection: 'row'
    },
    amountText: {
        fontSize: 14,
        fontFamily: 'IBMPlexSans-Medium',
        color: '#FFFFFF',
    },
    locationText: {
        fontSize: 12,
        fontFamily: 'IBMPlexSans-Medium',
        color: '#FFFFFF',
        paddingTop: hp('0.5%'),
        marginRight:wp('2.5%')
    },
    gradientStyle: {
        width:wp('80%'),
        borderRadius: 6,
        marginTop:hp('5%'),
        flexDirection: 'row',
        justifyContent: 'center',
        alignSelf: 'center',
        paddingTop: hp('1.5%'),
        paddingBottom:hp('1.5%')
    },
    gradientStyle1: {
        width:wp('80%'),
        borderRadius: 6,
        marginTop:hp('2%'),
        flexDirection: 'row',
        justifyContent: 'center',
        alignSelf: 'center',
        paddingTop: hp('1.5%'),
        paddingBottom:hp('1.5%')
    },
    gradientTextStyle: {
        fontSize: 16,
        fontFamily: 'IBMPlexSans-Medium',
        textAlign: 'center',
        alignSelf: 'center',
        color: '#FFFFFF'
    },
})
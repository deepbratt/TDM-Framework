import { StyleSheet } from 'react-native';
import { widthPercentageToDP as wp, heightPercentageToDP as hp } from 'react-native-responsive-screen';
export const styles = StyleSheet.create({
    mainContainer: {
        width: wp('90%'),
        height: hp('45%'),
        backgroundColor: '#F3F4F9',
        alignSelf: 'center',
        flexDirection: 'column',
        justifyContent: 'flex-start'
    },
    graidentView: {
        width: wp('100%'),
        height: hp('100%'),
        justifyContent: 'center'
    },
    icon: {
        marginTop: hp('1%'),
        marginRight: wp('1%'),
        alignSelf: 'flex-end',
        resizeMode: 'contain',
    },
    paymentErrorText: {
        width: wp('80%'),
        alignSelf: 'center',
        fontSize: 18,
        fontFamily: 'IBMPlexSans-Bold',
        textAlign: 'center',
        marginTop: hp('7%'),
        color: '#EE4B4B'
    },
    detailText: {
        width: wp('70%'),
        fontSize: 12,
        fontFamily: 'IBMPlexSans-Light',
        alignSelf: 'center',
        textAlign: 'center',
        color: '#A3A3A3',
        marginTop: hp('2%')
    },
    gradientStyle: {
        width:wp('80%'),
        borderRadius: 6,
        marginTop:hp('7%'),
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
    TouchableStyle: {
        width: wp('30%'),
        alignSelf: 'center',
        marginTop: hp('2%'),
    },
    supportText: {
        textAlign: 'center',
        fontSize: 12,
        fontFamily: 'IBMPlexSans-Medium',
        color: '#3A3A3A',
    }
})
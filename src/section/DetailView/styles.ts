import { StyleSheet } from "react-native"
import { widthPercentageToDP as wp, heightPercentageToDP as hp } from 'react-native-responsive-screen';
import { COLOR } from "../../Theme/Colors";
export const styles = StyleSheet.create({
    amountMainContainer: {
        width: wp('95%'),
        flexDirection: "row",
        justifyContent: "space-between",
        alignSelf: 'center',
        marginTop: wp('10%')
    },
    amountText: {
        fontSize: 18,
        fontFamily: 'IBMPlexSans-Medium',
        color: COLOR.primary
    },
    buttonContainer: {
        flexDirection: 'row',
        justifyContent: 'flex-start'
    },
    shareTouchableStyle: {
        height: hp('3%'),
        width: wp('9%'),
        alignSelf: 'center',
        marginLeft: wp('2%')
    },
    editStyle: {
        alignSelf: 'center',
        marginTop: wp('1%'),
    },
    buttonIcon: {
        padding: wp('2%'),
        alignSelf: 'center',
        resizeMode: 'cover'
    },
    brandTextView: {
        width: wp('95%'),
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignSelf: 'center',
        marginTop: hp('1%')
    },
    brandNameText: {
        fontSize: 14,
        fontFamily: 'IBMPlexSans-Bold',
        color: COLOR.RaisinBlack
    },
    brandStatusView: {
        width: wp('10%'),
        backgroundColor: '#5AC8FA',
        borderRadius: 6
    },
    brandStatusText: {
        fontSize: 12,
        fontFamily: 'IBMPlexSans-Medium',
        color: COLOR.White,
        textAlign: 'center'
    },
    productInfoMainView: {
        flexDirection: 'column',
        width: '95%',
        alignSelf: 'center',
        marginTop: wp('2%')
    },
    productInfoSubView: {
        flexDirection: 'row',
        justifyContent: 'space-evenly',
        paddingTop: hp('3%')
    },
    infoView: {
        flexDirection: 'column',
        justifyContent: "space-between"
    },
    infoText: {
        fontSize: 12,
        textAlign:"center",
        fontFamily: 'IBMPlexSans-Medium',
        color: COLOR.secondary,
        paddingTop: hp('0.5%')
    },
    infoHeading: {
        fontSize: 14,
        fontFamily: 'IBMPlexSans-Medium',
        color: COLOR.DarkCharcoal,
        paddingTop: hp('0.5%'),
    },
    descriptionHeading: {
        width: wp('95%'),
        alignSelf: 'center',
        fontSize: 14,
        fontFamily: 'IBMPlexSans-Medium',
        color: COLOR.DarkCharcoal,
        marginTop: hp('3%')
    },
    descriptionText: {
        width: wp('95%'),
        alignSelf: 'center',
        fontSize: 14,
        fontFamily: 'IBMPlexSans-Light',
        color: COLOR.secondary,
        textAlign: 'justify'
    },
    dealMainContainer: {
        width: wp('100%'),
        backgroundColor: '#2B8EFE',
        marginTop: hp('3%'),
    },
    dealView: {
        width: '90%',
        backgroundColor: COLOR.White,
        marginTop: wp('5%'),
        alignSelf: 'center',
        marginBottom: wp('5%'),
        borderRadius: 6,
        paddingTop: hp('1.5%'),
        paddingBottom: hp('1.5%')
    },
    dealText: {
        fontSize: 16,
        fontFamily: 'IBMPlexSans-Medium',
        color: COLOR.DarkCharcoal,
        textAlign: 'center',
    },
    comparisonButtonMainView: {
        width: wp('60%'),
        alignSelf: 'center',
        paddingTop: hp('1%'),
        paddingBottom: hp('3%'),
        flexDirection: 'row',
        justifyContent: 'space-between',
    },
    comparisonTouchable: {
        flexDirection: 'row',
        justifyContent: 'center',
    },
    comparisonButtonText: {
        fontSize: 12,
        fontFamily: 'IBMPlexSans-Medium',
        color: COLOR.White,
        alignSelf: 'center',
        paddingLeft: wp('2%')
    },
    profileMainView: {
        width: wp('95%'),
        alignSelf: 'center',
        flexDirection: "row",
        justifyContent: 'flex-start',
        paddingTop: hp('1.5%'),
        paddingBottom: hp('1.5%')
    },
    avatarView: {
        width: wp('16%'),
        alignSelf: 'center',
    },
    profileHeading: {
        width: wp('95%'),
        alignSelf: 'center',
        fontSize: 14,
        fontFamily: 'IBMPlexSans-Medium',
        color: COLOR.DarkCharcoal,
        paddingTop: hp('1%')
    },
    userNameText: {
        alignSelf: 'center',
        fontSize: 16,
        fontFamily: 'IBMPlexSans-Light',
        color: COLOR.DarkCharcoal,
        marginLeft: wp('2%')
    },
    profileBorderView: {
        width: wp('100%'),
        borderWidth: 1,
        marginTop: hp('1.5%'),
        borderColor: '#E0E0E0',
        marginBottom: hp('1.5%'),
    },
   
  
})
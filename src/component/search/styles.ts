import { StyleSheet } from "react-native";
import { widthPercentageToDP as wp, heightPercentageToDP as hp } from 'react-native-responsive-screen';
import { COLOR } from "../../Theme/Colors";
export const styles = StyleSheet.create({
    bottomNavigationView: {
        backgroundColor: COLOR.White,
        width: wp('100%'),
        height: hp('65%'),
        borderTopLeftRadius: 24,
        borderTopRightRadius: 24,
        justifyContent: 'flex-start',
        alignItems: 'center',
    },
    filterSearchText: {
        width: wp('95%'),
        alignSelf: 'center',
        fontSize: 20,
        fontFamily: 'IBMPlexSans-SemiBold',
        color: COLOR.DarkCharcoal,
        textAlign: 'center',
        marginTop: hp('2%')
    },
    subHeading: {
        width: wp('95%'),
        alignSelf: 'center',
        fontSize: 14,
        fontFamily: 'IBMPlexSans-Light',
        color: COLOR.GraniteGray,
        textAlign: 'center',
        marginTop: hp('1%')
    },
    itemContainerDropDrown: {
        backgroundColor: COLOR.White
    },
    MainViewDropDown: {
        width: wp('95%')
    },
    itemTextDropDown: {
        fontSize: 14, 
        fontFamily: 'IBMPlexSans-Light',
        color: COLOR.secondary
    },
    textInputDropDown: {
        fontSize: 14,
        fontFamily: 'IBMPlexSans-Medium',
        color: COLOR.DarkCharcoal
    },
    kilometerHeadingText: {
        width: wp('95%'),
        alignSelf: 'center',
        fontSize: 14,
        color: COLOR.DarkCharcoal,
        fontFamily: 'IBMPlexSans-Medium',
        marginTop: hp('1%')
    },
    toFromView: {
        width: wp('95%'),
        alignSelf: 'center',
        flexDirection: 'row',
        justifyContent: 'space-between',
        marginTop: hp('0.5%')
    },
    fromText: {
        width: wp('46.5%'),
        paddingVertical: hp('0.5%'),
        paddingLeft: wp('2%'),
        fontSize: 14,
        fontFamily: 'IBMPlexSans-Light',
        color: COLOR.secondary
    },
    gradientButtonStyle: {
        width: wp('80%'),
        borderRadius: 6,
        flexDirection: 'row',
        justifyContent: 'center',
        alignSelf: 'center',
        paddingTop: hp('1.5%'),
        paddingBottom: hp('1.5%'),
        marginVertical:hp('3%')
    },
    gradientButtonText: {
        fontSize: 16,
        fontWeight: '500',
        textAlign: 'center',
        alignSelf: 'center',
        color: COLOR.White
    },
})
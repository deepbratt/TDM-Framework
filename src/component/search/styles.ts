import { StyleSheet } from "react-native";
import { widthPercentageToDP as wp, heightPercentageToDP as hp } from 'react-native-responsive-screen';
export const styles = StyleSheet.create({
    bottomNavigationView: {
        backgroundColor: '#fff',
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
        color: '#313131',
        textAlign: 'center',
        marginTop: hp('2%')
    },
    subHeading: {
        width: wp('95%'),
        alignSelf: 'center',
        fontSize: 14,
        fontFamily: 'IBMPlexSans-Light',
        color: '#666666',
        textAlign: 'center',
        marginTop: hp('1%')
    },
    itemContainerDropDrown: {
        backgroundColor: '#FFFFFF'
    },
    MainViewDropDown: {
        width: wp('95%')
    },
    itemTextDropDown: {
        fontSize: 14, 
        fontFamily: 'IBMPlexSans-Light',
        color: '#979797'
    },
    textInputDropDown: {
        fontSize: 14,
        fontFamily: 'IBMPlexSans-Medium',
        color: '#313131'
    },
    kilometerHeadingText: {
        width: wp('95%'),
        alignSelf: 'center',
        fontSize: 14,
        color: '#313131',
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
        color: '#979797'
    },
    gradientButtonStyle: {
        width: wp('80%'),
        borderRadius: 6,
        marginTop: hp('3%'),
        flexDirection: 'row',
        justifyContent: 'center',
        alignSelf: 'center',
        paddingTop: hp('2%'),
        paddingBottom: hp('1.5%')
    },
    gradientButtonText: {
        fontSize: 16,
        fontWeight: '500',
        textAlign: 'center',
        alignSelf: 'center',
        color: '#FFFFFF'
    },
})
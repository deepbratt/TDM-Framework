import { StyleSheet } from "react-native";
import { widthPercentageToDP as wp, heightPercentageToDP as hp } from 'react-native-responsive-screen';
export const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
    scrollView: {
        height: hp('100%'),
        width: wp('100%'),
        backgroundColor: '#E5E5E5',
    },
    borderView: {
        width: wp('100%'),
        backgroundColor: '#EBEBEB',
        borderWidth: 0.5,
        marginTop: hp('1%')
    },
    dropdownContainer: {
        width: wp('95%'),
        alignSelf: 'center',
        flexDirection: 'row',
        justifyContent: 'space-between',
        marginTop: hp('1%')
    },
    iconView: {
        width: wp('10%'),
        height: hp('5%'),
        alignSelf: 'center',
        justifyContent: 'center',
        borderRadius: 50,
        backgroundColor: '#F9F9F9'
    },
    buttonIcon: {
        alignSelf: 'center',
        resizeMode: 'contain',
        tintColor: '#313131',
    },
    itemContainerDropDrown: {
        backgroundColor: '#FFFFFF'
    },
    MainViewDropDown: {
        width: wp('80%'),
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
    gradientStyle1: {
        width:wp('80%'),
        borderRadius: 6,
        marginTop:hp('4%'),
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
        color: '#FFFFFF'
    },
    descriptionInput: {
        width: wp('80%'),
        fontSize: 14,
        fontFamily: 'IBMPlexSans-Light',
        paddingLeft: wp('2.5%')
    }
})